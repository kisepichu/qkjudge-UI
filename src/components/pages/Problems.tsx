import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Problem {
  problem_id: number
  title: string
  author: string
  difficulty: number
}

interface GetProblemResponse {
  problems: Problem[]
}

function Problems() {
  console.log('Problems')
  const [problems, setProblems] = useState<Problem[]>([])

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    console.log(api)
    axios
      .get<GetProblemResponse>(`${api}/problems`, { withCredentials: true })
      .then((res) => {
        setProblems(res.data.problems)
      })
  }, [])

  return (
    <div className="m-2 max-w-full">
      <h1 className="text-2xl m-2 my-4">Problems</h1>
      <div className="text-xl m-auto max-w-7/8">
        {problems.length ? (
          problems.map((p) => (
            <Link
              to={`/problems/${p.problem_id}`}
              className="m-4 flex justify-between p-2 rounded ring-1 shadow-lg hover:ring-2"
              key={p.problem_id}
            >
              <p className="m-2">{`${p.problem_id}. ${p.title}`}</p>
              <div className="p-2 flex justify-end divide-x divide-style-dashed">
                <div className="px-2 flex">
                  <p className="text-sm mb-0 m-auto">author: </p>
                  <p className="mx-1">{p.author}</p>
                </div>
                <div className="px-2 flex">
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
  )
}

export default Problems
