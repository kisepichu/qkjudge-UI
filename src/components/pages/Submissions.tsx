import { ClassNames } from '@emotion/react'
import { LinearProgress, Pagination } from '@mui/material'
import axios from 'axios'
import Axios from 'axios'
import { Result } from 'postcss'
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

function Submissions() {
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [pagesNum, setPagesNum] = useState(1)
  const [loading, setLoading] = useState(true)
  const { search } = useLocation()
  const [page, setPage] = useState('1')
  const queries = new URLSearchParams(search)
  const navigate = useNavigate()

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    const queryPage = queries.get('page')
    const url = queryPage
      ? `${api}/submissions?page=${queryPage}`
      : `${api}/submissions`
    // console.log(url)
    axios
      .get<GetSubmissionsResponse>(url, {
        withCredentials: true
      })
      .then((res) => {
        setLoading(false)
        setPagesNum(res.data.pages_number)
        setSubmissions(res.data.submissions)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) console.log(err.status)
        setLoading(false)
      })
    // console.log(pagesNum)
  }, [page])
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
            {submissions.map((s) => (
              <div className="table-row" key={`${s.id}`}>
                <Link
                  to={`/submissions/${s.id}`}
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
                {/* <div className="table-cell p-2 w-auto block border">
                  {s.problem_id}
                </div> */}
                <div className="table-cell p-2 w-auto block border">
                  {s.author}
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
            }}
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
