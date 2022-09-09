import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Problem {
  problem_id: number
  title: string
  author: string
  difficulty: number
}

interface GetProblemsResponse {
  problems: Problem[]
}

function Problems() {
  console.log('Problems')
  const [problems, setProblems] = useState<Problem[]>([])

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<GetProblemsResponse>(`${api}/problems`, { withCredentials: true })
      .then((res) => {
        setProblems(res.data.problems)
      })
  }, [])

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-4 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-3xl mb-6">Problems</h1>
        <div className="text-xl m-auto md:max-w-11/12">
          {problems.length ? (
            problems.map((p) => (
              <Link
                to={`/problems/${p.problem_id}`}
                className="m-4 flex justify-between p-2 rounded ring-1 shadow-md hover:ring-2"
                key={p.problem_id}
              >
                <p className="text-lg md:text-xl truncate m-2">{`${p.problem_id}. ${p.title}`}</p>
                <div className="p-2 flex justify-end divide-x divide-style-dashed">
                  <div className="px-2 flex">
                    <p className="hidden md:block text-sm mb-0 m-auto">
                      author:{' '}
                    </p>
                    <p className="hidden md:block mx-1">{p.author}</p>
                  </div>
                  <div className="text-lg md:text-xl px-2 flex">
                    <p className="text-sm mb-0 m-auto text-gray-500">★</p>
                    <p className="">{p.difficulty}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Problems
