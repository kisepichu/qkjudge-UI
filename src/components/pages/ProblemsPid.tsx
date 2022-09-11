/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { Button, LinearProgress } from '@mui/material'
import { useUserState } from '../states/userState'
import Login from './Login'
import LoginBlock from '../blocks/LoginBlock'
import { useBeforeLoginMutators } from '../states/beforeLogin'

interface Problem {
  id: number
  title: string
  author: string
  difficulty: number
  statement: string
}

function ProblemsPid() {
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  const params = useParams<{
    problem_id: string
  }>()
  const [loading, setLoading] = useState(true)
  const [problemNotFound, setProblemNotFound] = useState(false)
  const [problem, setProblem] = useState<Problem>({
    id: 0,
    title: '',
    author: '',
    difficulty: 0,
    statement: ''
  })
  const user = useUserState()
  function copy(content: string) {
    navigator.clipboard.writeText(content)
  }
  const navigate = useNavigate()

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<Problem>(`${api}/problems/${params.problem_id}`, {
        withCredentials: true
      })
      .then((res) => {
        setLoading(false)
        setProblemNotFound(false)
        setProblem(res.data)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) console.log(err.status)
        setLoading(false)
        setProblemNotFound(true)
        setProblem({
          id: -1,
          title: '',
          author: '',
          difficulty: 0,
          statement: ''
        })
        setTimeout(() => {
          navigate('/problems')
        }, 2000)
      })
  }, [])
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-6 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        {problemNotFound ? (
          <div>
            <div className="text-3xl mb-6 font-semibold">Problem Not Found</div>
            <div>Redirecting...</div>
          </div>
        ) : (
          <div>
            {loading ? (
              <LinearProgress />
            ) : (
              <div>
                <h1 className="text-3xl mb-6 font-semibold">{problem.title}</h1>
                <div className="text-lg">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      // eslint-disable-next-line react/no-unstable-nested-components
                      code: ({ node, ...props }) => {
                        if (props.inline) return <code {...props} />
                        return (
                          <div className="flex justify-between font-sans text-md">
                            <code {...props} />
                            <button
                              onClick={() => {
                                const s = props.children[0]
                                if (typeof s !== 'string') return
                                copy(s.slice(0, -1))
                              }}
                              type="button"
                              className="text-sm px-1 my-0 mb-auto rounded ring-1 hover:ring-2 active:bg-gray-100"
                            >
                              Copy
                            </button>
                          </div>
                        )
                      }
                    }}
                  >
                    {problem.statement}
                  </ReactMarkdown>
                </div>
                {user.username ? (
                  <div>{user.username}</div>
                ) : (
                  <div className="m-auto py-4 md:max-w-1/2">
                    <div className="text-right">
                      提出するにはログインしてください
                    </div>
                    <LoginBlock />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProblemsPid
