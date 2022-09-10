import { ClassNames } from '@emotion/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Submission {
  id: number
  problem_id: number
  author: string
  result: string
  language: string
  language_version: string
}

interface GetSubmissionsResponse {
  submissions: Submission[]
}

function Submissions() {
  console.log('Submissions')
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<GetSubmissionsResponse>(`${api}/submissions`, {
        withCredentials: true
      })
      .then((res) => {
        setSubmissions(res.data.submissions)
      })
  }, [])
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-6 md:p-8 max-w-11/12 rounded shadow-lg bg-light-50">
        <h1 className="text-2xl mb-3 md:(text-3xl mb-6)">Submissions</h1>
        <div className="table w-2xl text-xl m-auto md:max-w-11/12 border rounded shadow">
          <div className="table-header-group text-right">
            <div className="table-row">
              <div className="table-cell border p-2">ID</div>
              <div className="table-cell border p-2">problem</div>
              <div className="table-cell border p-2">user</div>
              <div className="table-cell border p-2">result</div>
              <div className="table-cell border p-2">language</div>
            </div>
          </div>
          <div className="text-lg table-row-group text-right">
            {submissions.length ? (
              submissions.map((s) => (
                <div className="table-row" key={`${s.id}`}>
                  <Link
                    to={`/submissions/${s.id}`}
                    className="table-cell p-2 w-auto block border font-semibold text-blue-500 hover:(underline bg-gray-100)"
                  >
                    # {s.id}
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
                  <div className="table-cell p-2 w-auto block border">
                    {s.language}
                  </div>
                </div>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submissions
