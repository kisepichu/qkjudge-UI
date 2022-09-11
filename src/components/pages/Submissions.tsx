import { ClassNames } from '@emotion/react'
import { LinearProgress } from '@mui/material'
import axios from 'axios'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import languages from '../data/Languages'

interface Submission {
  id: number
  problem_id: number
  author: string
  result: string
  language_id: number
}

interface GetSubmissionsResponse {
  submissions: Submission[]
}

function Submissions() {
  // console.log('Submissions')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<GetSubmissionsResponse>(`${api}/submissions`, {
        withCredentials: true
      })
      .then((res) => {
        setLoading(false)
        setSubmissions(res.data.submissions)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) console.log(err.status)
        setLoading(false)
      })
  }, [])
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-6 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl mb-3 md:(text-3xl mb-6)">Submissions</h1>
        <div className="table w-2xl text-base m-auto max-w-full md:max-w-11/12 border rounded shadow">
          <div className="table-header-group text-right">
            <div className="table-row">
              <div className="table-cell border p-2">ID</div>
              <div className="table-cell border p-2">problem</div>
              <div className="table-cell border p-2">user</div>
              <div className="table-cell border p-2">result</div>
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
                <div className="table-cell p-2 w-auto block border">
                  {s.problem_id}
                </div>
                <div className="table-cell p-2 w-auto block border">
                  {s.author}
                </div>
                <div className="table-cell p-2 w-auto block border">
                  {s.result}
                </div>
                <div className="table-cell p-2 w-auto block border hidden md:block">
                  {languages[s.language_id].label}
                </div>
              </div>
            ))}
          </div>
        </div>
        {loading && (
          <LinearProgress className="w-2xl m-auto max-w-full md:max-w-11/12" />
        )}
      </div>
    </div>
  )
}

export default Submissions
