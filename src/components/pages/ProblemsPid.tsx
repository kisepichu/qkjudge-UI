import axios from 'axios'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link, useParams } from 'react-router-dom'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

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

  function copy(i: number) {
    const s = document.getElementById(`code_${i}`)
    navigator.clipboard.writeText(s?.textContent).then(
      () => {},
      (err) => {
        console.log(err)
      }
    )
  }

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL
    axios
      .get<Problem>(`${api}/problems/${params.problem_id}`, {
        withCredentials: true
      })
      .then((res) => {
        setProblem(res.data)

        console.log('effect')
        const es = document.querySelectorAll('code')
        // eslint-disable-next-line no-restricted-syntax
        for (let i = 0; i < es.length; i += 1) {
          console.log(i)
          const button = document.createElement('button')
          button.setAttribute('onClick', `copy(${i})`)
          button.setAttribute('id', `code_${i}`)
          button.innerHTML = 'Copy'
          es[i].insertAdjacentElement('afterend', button)
        }
      })
  }, [])
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-8 max-w-11/12 rounded shadow-lg bg-light-50">
        <h1 className="text-3xl mb-6 font-semibold">{problem.title}</h1>
        <div className="text-lg">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {problem.statement}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default ProblemsPid
