import { LinearProgress, Pagination } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ResultCode from '../blocks/ResultCode'
import languages from '../data/Languages'
import { useBeforeLoginMutators } from '../states/beforeLogin'

const PER_PAGE = 10

interface Submission {
  id: number
  problem_id: number
  problem_title: string
  author: string
  result: string
  language_id: number
}

interface GetSubmissionsResponse {
  pages_number: number
  submissions: Submission[]
}

// 表示行に legacy 由来かどうかのフラグを持たせる。詳細リンクと author prefix / ID prefix の出し分けに使う。
interface DisplayRow extends Submission {
  isLegacy: boolean
}

function Submissions() {
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  // beforeLogin (post-login redirect 先) は pathname だけだとクエリ (例: ?page=5)
  // が落ちる。本ページは ?page= でページ番号を保持するので、search も含めて保存し、
  // ページ移動でも追従させる。
  useEffect(() => {
    setBeforeLogin(location.pathname + location.search)
  }, [location.pathname, location.search])

  // 新側は変動するためページごとに fetch、legacy は read-only スナップショットなので
  // mount 時に全件まとめて取得しメモリに保持する。これで「新側最後のページに legacy の
  // 先頭を埋め込み、それ以降は legacy 全体をシフトして連続ページング」する slice を
  // 単純なオフセット計算で組める。
  const [rows, setRows] = useState<DisplayRow[]>([])
  const [newPagesNum, setNewPagesNum] = useState(0)
  // 新側最後ページの件数。null = まだ未取得 (= 最後ページ fetch されていない)。
  // legacy 領域 (n > newPagesNum) の表示には shift = PER_PAGE - lastNewPageCount が必要。
  const [lastNewPageCount, setLastNewPageCount] = useState<number | null>(null)
  // legacy 全件 (id 降順)。null = まだロード中。空配列ならエラー or legacy なし。
  const [legacyAll, setLegacyAll] = useState<Submission[] | null>(null)
  const [loading, setLoading] = useState(true)
  const { search } = location
  const [page, setPage] = useState('1')
  const [defaultPage, setDefaultPage] = useState(1)
  const navigate = useNavigate()

  // `?page=` を安全な正整数に変換する。非数値 (`foo`)、0 以下、小数、NaN は 1 に丸める。
  function parsePageQuery(s: string): number {
    const q = new URLSearchParams(s).get('page')
    const n = Number(q)
    if (!Number.isFinite(n) || n < 1) return 1
    return Math.floor(n)
  }

  // URL の ?page= 変化 (mount + browser back/forward) を state に再同期する。
  useEffect(() => {
    const p = parsePageQuery(search)
    setDefaultPage(p)
    setPage(p.toString())
  }, [search])

  // mount: legacy 全 pages を並列取得して memory に置く。read-only スナップショットで
  // 件数も小さい (TASK-005 時点で 58 件 / 6 ページ) ので全件持っても問題ない。
  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    const controller = new AbortController()
    axios
      .get<GetSubmissionsResponse>(`${api}/legacy/submissions?page=1`, {
        withCredentials: true,
        signal: controller.signal
      })
      .then(async (res) => {
        const firstPage = res.data?.submissions ?? []
        const totalLegacyPages = res.data?.pages_number ?? 0
        if (totalLegacyPages <= 1) {
          setLegacyAll(firstPage)
          return
        }
        // page=2..N を並列で取って concat (順序は page 番号順 = id 降順を維持)
        const restPages = await Promise.all(
          Array.from({ length: totalLegacyPages - 1 }, (_, i) => i + 2).map(
            (p) =>
              axios
                .get<GetSubmissionsResponse>(
                  `${api}/legacy/submissions?page=${p}`,
                  { withCredentials: true, signal: controller.signal }
                )
                .then((r) => r.data?.submissions ?? [])
          )
        )
        setLegacyAll([...firstPage, ...restPages.flat()])
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        if (axios.isAxiosError(err)) console.log(err.response?.status)
        setLegacyAll([])
      })
    return () => {
      controller.abort()
    }
  }, [])

  // 表示する page p のロジック:
  //   p < newPagesNum         → 新側 page=p のみ (満ページ)
  //   p === newPagesNum       → 新側 page=p + legacy 先頭で 10 件に埋める (境界ページ)
  //   p > newPagesNum         → legacy のシフトしたオフセット位置から 10 件 (fetch 不要)
  //
  // legacyAll が未確定の段階では「新側のみ」モードで表示する (legacy が遅れて来ても、
  // 後で再評価して境界 / シフト表示に切り替わる)。
  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    const n = Number(page) || 1
    setLoading(true)
    const controller = new AbortController()

    // 新側ゼロ件 (newPagesNum=0 が確定後) で legacy が確定済みなら、全部 legacy 扱い。
    if (
      legacyAll !== null &&
      newPagesNum === 0 &&
      lastNewPageCount !== null
    ) {
      const offset = (n - 1) * PER_PAGE
      setRows(
        legacyAll.slice(offset, offset + PER_PAGE).map((s) => ({
          ...s,
          isLegacy: true
        }))
      )
      setLoading(false)
      return undefined
    }

    if (newPagesNum === 0 || n <= newPagesNum) {
      // 新側 fetch が要るケース (初回、または n が新側範囲内)
      axios
        .get<GetSubmissionsResponse>(`${api}/submissions?page=${n}`, {
          withCredentials: true,
          signal: controller.signal
        })
        .then((res) => {
          const fetchedNewPages = res.data?.pages_number ?? 0
          const newSubs = res.data?.submissions ?? []
          setNewPagesNum(fetchedNewPages)
          // 最後ページに到達したら最後ページの件数を確定 (= シフト計算の基礎)。
          if (n === fetchedNewPages || fetchedNewPages === 0) {
            setLastNewPageCount(newSubs.length)
          }
          // 境界ページ: 新側 + legacy 先頭 で PER_PAGE に埋める。
          if (
            legacyAll !== null &&
            n === fetchedNewPages &&
            newSubs.length < PER_PAGE
          ) {
            const fill = PER_PAGE - newSubs.length
            setRows([
              ...newSubs.map((s) => ({ ...s, isLegacy: false })),
              ...legacyAll
                .slice(0, fill)
                .map((s) => ({ ...s, isLegacy: true }))
            ])
          } else {
            setRows(newSubs.map((s) => ({ ...s, isLegacy: false })))
          }
          setLoading(false)
        })
        .catch((err) => {
          if (axios.isCancel(err)) return
          if (axios.isAxiosError(err)) console.log(err.response?.status)
          setLoading(false)
        })
    } else if (lastNewPageCount === null) {
      // n > newPagesNum で legacy 領域だが、shift を計算するのに新側最後ページの件数が
      // 必要。まだ取れていないので新側 page=newPagesNum を fetch して確定させる。
      // (その state 更新でこの effect が再実行され、本物の表示分岐へ進む。)
      axios
        .get<GetSubmissionsResponse>(
          `${api}/submissions?page=${newPagesNum}`,
          { withCredentials: true, signal: controller.signal }
        )
        .then((res) => {
          const lastCount = (res.data?.submissions ?? []).length
          setLastNewPageCount(lastCount)
        })
        .catch((err) => {
          if (axios.isCancel(err)) return
          if (axios.isAxiosError(err)) console.log(err.response?.status)
          setLoading(false)
        })
    } else if (legacyAll !== null) {
      // 純 legacy 領域: シフトしたオフセットから 10 件 slice。fetch 不要。
      const shift = PER_PAGE - lastNewPageCount
      const offset = shift + (n - newPagesNum - 1) * PER_PAGE
      setRows(
        legacyAll.slice(offset, offset + PER_PAGE).map((s) => ({
          ...s,
          isLegacy: true
        }))
      )
      setLoading(false)
    }

    return () => {
      controller.abort()
    }
  }, [page, newPagesNum, lastNewPageCount, legacyAll])

  // Pagination の総ページ数。新側件数と legacy 件数の合算を PER_PAGE で割る。
  // まだ legacy か newPagesNum 未確定の間は newPagesNum (もしくは 1) を暫定で出す。
  // newPagesNum=0 (= 新側 0 件) の場合に `(newPagesNum - 1) * PER_PAGE` が負になって
  // 合算件数を過小評価し、legacy 末尾ページが隠れることがあるため Math.max でガード。
  const newCount =
    lastNewPageCount === null
      ? newPagesNum * PER_PAGE
      : Math.max(0, (newPagesNum - 1) * PER_PAGE + lastNewPageCount)
  const legacyCount = legacyAll?.length ?? 0
  const pagesNum = Math.max(
    1,
    Math.ceil((newCount + legacyCount) / PER_PAGE)
  )

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100 pb-4">
      <div className="m-auto p-6 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl mb-3 md:(text-3xl mb-6)">Submissions</h1>
        <div className="table w-2xl text-base m-auto max-w-full md:max-w-11/12 border rounded shadow">
          <div className="table-header-group text-right">
            <div className="table-row bg-orange-100">
              <div className="table-cell border p-2">ID</div>
              <div className="table-cell border p-2">problem</div>
              <div className="table-cell border p-2">user</div>
              <div className="table-cell text-center border p-2">result</div>
              <div className="table-cell border p-2 hidden md:block">
                language
              </div>
            </div>
          </div>
          <div className="text-base table-row-group text-right">
            {rows.map((s) => (
              <div
                className="table-row"
                key={s.isLegacy ? `legacy-${s.id}` : `${s.id}`}
              >
                <Link
                  to={
                    s.isLegacy
                      ? `/legacy/submissions/${s.id}`
                      : `/submissions/${s.id}`
                  }
                  className="table-cell p-2 w-auto block border font-bold text-blue-500 hover:(underline bg-gray-100)"
                >
                  {s.isLegacy ? `#L-${s.id}` : `#${s.id}`}
                </Link>
                <Link
                  to={`/problems/${s.problem_id}`}
                  className="table-cell p-2 w-auto block border font-bold text-blue-500 hover:(underline bg-gray-100)"
                >
                  {s.problem_title}
                </Link>
                <div className="table-cell p-2 w-auto block border">
                  {s.isLegacy ? `[legacy] ${s.author}` : s.author}
                </div>
                <div className="table-cell p-2 w-auto block border">
                  <ResultCode code={s.result} />
                </div>
                <div className="table-cell p-2 w-auto block border hidden md:block">
                  {languages[s.language_id].label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center m-4">
          <Pagination
            onChange={(e, p) => {
              if (p.toString() !== page) setLoading(true)
              navigate(`/submissions?page=${p}`)
              setPage(p.toString())
              setDefaultPage(p)
            }}
            page={defaultPage}
            count={pagesNum}
            variant="outlined"
            color="secondary"
          />
        </div>
        {loading && (
          <LinearProgress className="w-2xl m-auto max-w-full md:max-w-11/12" />
        )}
      </div>
    </div>
  )
}

export default Submissions
