import { LinearProgress } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ResultCode from '../blocks/ResultCode'
import { useBeforeLoginMutators } from '../states/beforeLogin'
import { useUserState } from '../states/userState'

interface Problem {
  id: number
  title: string
  author: string
  difficulty: number
  status: string
  last_submission: number
}

interface GetProblemsResponse {
  problems: Problem[]
}

function Problems() {
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  const user = useUserState()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  const [problems, setProblems] = useState<Problem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<GetProblemsResponse>(`${api}/problems`, { withCredentials: true })
      .then((res) => {
        setProblems(res.data.problems)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(true)
      })
  }, [user])

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100 pb-4">
      <div className="m-auto p-2 md:p-6 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl m-2 mb-3 md:(text-3xl mb-6)">Problems</h1>
        <div className="text-xl m-auto md:max-w-11/12">
          {loading ? (
            <LinearProgress />
          ) : (
            problems.map((p) => (
              <Link
                to={`/problems/${p.id}`}
                className="m-4 flex justify-between p-1 md:p-2 rounded ring-1 ring-orange-200 shadow-md hover:ring-2"
                key={p.id}
              >
                <div className="truncate flex">
                  <p className="text-base md:text-xl m-2 mx-3 truncate">{`${p.title}`}</p>

                  <div className="m-auto">
                    {(() => {
                      // console.log(p.status)
                      if (p.status === 'Accepted') {
                        return <ResultCode code="CP" />
                      }
                      if (p.status === 'NotAccepted') {
                        return <ResultCode code="NA" />
                      }
                      return <div />
                    })()}
                  </div>
                </div>

                <div className="p-2 flex justify-end divide-x divide-style-dashed">
                  <div className="px-2 flex">
                    <p className="hidden md:block text-sm mb-0 m-auto">
                      author:{' '}
                    </p>
                    <p className="hidden md:block mx-1">{p.author}</p>
                  </div>
                  <div className="text-lg md:text-xl pl-2 flex">
                    <p className="text-sm mb-0 m-auto text-gray-500">★</p>
                    <p className="mb-0 m-auto text-sm md:text-lg">
                      {p.difficulty}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Problems
