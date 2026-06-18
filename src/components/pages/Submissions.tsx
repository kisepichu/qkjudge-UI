import { LinearProgress, Pagination } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ResultCode from '../blocks/ResultCode'
import languages from '../data/Languages'
import { useBeforeLoginMutators } from '../states/beforeLogin'

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

// 表示行に legacy 由来かどうかのフラグを持たせる。詳細リンクと author prefix の出し分けに使う。
interface DisplayRow extends Submission {
  isLegacy: boolean
}

function Submissions() {
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  const [rows, setRows] = useState<DisplayRow[]>([])
  // 新側 / legacy 側の pages_number を分けて保持し、合算をページ総数とする。
  // 旧サーバーから残してある legacy は新側の末尾に連続するページ番号で続ける
  // (新側 page=1..newPagesNum、legacy page=newPagesNum+1..newPagesNum+legacyPagesNum)。
  const [newPagesNum, setNewPagesNum] = useState(0)
  const [legacyPagesNum, setLegacyPagesNum] = useState(0)
  // MUI Pagination は count >= 1 を期待するため、まだロード中の 0 状態でも 1 にする。
  const pagesNum = Math.max(1, newPagesNum + legacyPagesNum)
  const [loading, setLoading] = useState(true)
  const { search } = useLocation()
  const [page, setPage] = useState('1')
  const [defaultPage, setDefaultPage] = useState(1)
  const queries = new URLSearchParams(search)
  const navigate = useNavigate()

  useEffect(() => {
    const queryPage = queries.get('page')

    if (queryPage) {
      setDefaultPage(Number(queryPage))
      setPage(queryPage)
    }
  }, [])

  // mount 時に legacy 側 page=1 を一度だけ取り、legacy pages_number を確定させる。
  // 新側 pages_number は表示用 fetch のレスポンスから随時更新する。
  // legacy エンドポイントは public だが、他の認証付き GET と一貫させて withCredentials を付ける。
  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<GetSubmissionsResponse>(`${api}/legacy/submissions?page=1`, {
        withCredentials: true
      })
      .then((res) => {
        setLegacyPagesNum(res.data.pages_number)
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) console.log(err.response?.status)
      })
  }, [])

  // page か newPagesNum が変わるたびに、N が新側 or legacy のどちらに属するかを再判定する。
  // 初回 deep link (例 /submissions?page=5) で newPagesNum=0 のまま新側へ投げてしまうと
  // レスポンスで newPagesNum=1 と判明した後でも再 fetch されないので、依存配列に
  // newPagesNum を入れて確定後に legacy 側へ切り替わるようにする。
  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    const n = Number(page) || 1
    setLoading(true)
    // newPagesNum 未確定 (= 0) の初回は新側にアクセスして取得を兼ねる。
    if (newPagesNum === 0 || n <= newPagesNum) {
      axios
        .get<GetSubmissionsResponse>(`${api}/submissions?page=${n}`, {
          withCredentials: true
        })
        .then((res) => {
          setLoading(false)
          setNewPagesNum(res.data.pages_number)
          setRows(
            res.data.submissions.map((s) => ({ ...s, isLegacy: false }))
          )
        })
        .catch((err) => {
          if (axios.isAxiosError(err)) console.log(err.response?.status)
          setLoading(false)
        })
    } else {
      const legacyPage = n - newPagesNum
      axios
        .get<GetSubmissionsResponse>(
          `${api}/legacy/submissions?page=${legacyPage}`,
          { withCredentials: true }
        )
        .then((res) => {
          setLoading(false)
          setLegacyPagesNum(res.data.pages_number)
          setRows(
            res.data.submissions.map((s) => ({ ...s, isLegacy: true }))
          )
        })
        .catch((err) => {
          if (axios.isAxiosError(err)) console.log(err.response?.status)
          setLoading(false)
        })
    }
  }, [page, newPagesNum])
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
                  #{s.id}
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
              // console.log(p)
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
