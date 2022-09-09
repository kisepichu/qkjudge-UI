/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link, useParams } from 'react-router-dom'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { Button } from '@mui/material'

interface Problem {
  id: number
  title: string
  author: string
  difficulty: number
  statement: string
}

function ProblemsPid() {
  console.log('ProblemsPid')
  const params = useParams<{
    problem_id: string
  }>()
  const [problem, setProblem] = useState<Problem>({
    id: 0,
    title: '',
    author: '',
    difficulty: 0,
    statement: ''
  })
  function copy(content: string) {
    navigator.clipboard.writeText(content)
  }

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<Problem>(`${api}/problems/${params.problem_id}`, {
        withCredentials: true
      })
      .then((res) => {
        setProblem(res.data)
      })
  }, [])
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-6 md:p-8 max-w-11/12 rounded shadow-lg bg-light-50">
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
                  <div className="flex justify-between">
                    <code {...props} />
                    <button
                      onClick={() => {
                        const s = props.children[0]
                        if (typeof s !== 'string') return
                        copy(s.slice(0, -1))
                      }}
                      type="button"
                      className="text-md px-1 my-0 mb-auto rounded ring-1 hover:ring-2 active:bg-gray-100"
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
      </div>
    </div>
  )
}

export default ProblemsPid
