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
import AceEditor from 'react-ace'
import { useUserState } from '../states/userState'
import Login from './Login'
import LoginBlock from '../blocks/LoginBlock'
import { useBeforeLoginMutators } from '../states/beforeLogin'
import languages, { editorMode, Language } from '../data/Languages'

import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-text'
import 'ace-builds/src-noconflict/theme-github'
import { Autocomplete, Menu, MenuItem, TextField } from '@mui/material'

type AutocompleteOption = Language

interface Problem {
  id: number
  title: string
  author: string
  difficulty: number
  statement: string
  time_limit: string
  memory_limit: string
}

interface PostSubmitRequest {
  problem_id: number
  language_id: number
  source: string
}

interface PostSubmitResponse {
  id: number
}

function ProblemsPid() {
  const api = import.meta.env.VITE_API_URL
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
    statement: '',
    time_limit: '',
    memory_limit: ''
  })
  const [source, setSource] = useState('')
  const [language, setLanguage] = useState({
    id: 0,
    label: 'C++ 17 / GCC 11.1.0',
    language: 'C++ 17',
    language_code: 'cpp17',
    version: 'GCC 11.1.0',
    version_index: '1'
  } as Language)
  const user = useUserState()
  function copy(content: string) {
    navigator.clipboard.writeText(content)
  }
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  function submit() {
    setSubmitting(true)
    // console.log({
    //   problem_id: problem.id,
    //   language_id: language.id,
    //   source
    // } as PostSubmitRequest)
    axios
      .post<PostSubmitResponse>(
        `${api}/submit`,
        {
          problem_id: problem.id,
          language_id: language.id,
          source
        } as PostSubmitRequest,
        { withCredentials: true }
      )
      .then((res) => {
        setSubmitting(false)
        navigate(`/submissions/${res.data.id}`)
      })
      .catch((err) => {
        setSubmitting(false)
        if (Axios.isAxiosError(err) && err.response && err.response.status) {
          setMessage(`submit failed: ${err.response.status}`)
        } else {
          setMessage('submit failed')
        }
      })
  }

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
        // console.log(res.data)
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
          statement: '',
          time_limit: '',
          memory_limit: ''
        })
        setTimeout(() => {
          navigate('/problems')
        }, 2000)
      })
  }, [])
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100 pb-4">
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
                <div className="md:flex justify-between text-base">
                  <h1 className="text-3xl mb-6 font-semibold">
                    {problem.title}
                  </h1>
                  <div className="md:flex">
                    <div className="mx-2  my-auto flex">
                      <div>difficulty: </div>
                      <div className="ml-1 text-sm mb-0 my-auto">★</div>
                      <div>{problem.difficulty}</div>
                    </div>
                    <div className="mx-2  my-auto">
                      作問者: {problem.author}
                    </div>
                    <div className="mx-2  my-auto">
                      実行時間制限: {problem.time_limit} s
                    </div>
                    <div className="mx-2 my-auto">
                      メモリ制限: {problem.memory_limit} KB
                    </div>
                  </div>
                </div>
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
                  <div>
                    <div className="text-xl my-2 md:max-w-full">
                      <div className="m-2 text-2xl">Submit</div>
                      <AceEditor
                        mode={editorMode(language)}
                        theme="github"
                        onChange={(s) => {
                          setSource(s)
                        }}
                        name="problemspid_source"
                        width="100%"
                        // setOptions={{
                        //   enableBasicAutocompletion: true,
                        //   enableLiveAutocompletion: true,
                        //   enableSnippets: true
                        // }}
                        highlightActiveLine={false}
                        minLines={10}
                        maxLines={30}
                        fontSize={16}
                        className="m-auto my-2 border-0 border-1 shadow rounded"
                      />
                    </div>
                    <div className="flex text-sm justify-end mt-5 m-auto md:max-w-11/12">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        defaultValue={
                          {
                            id: 0,
                            label: 'C++ 17 / GCC 11.1.0',
                            language: 'C++ 17',
                            language_code: 'cpp17',
                            version: 'GCC 11.1.0',
                            version_index: '1'
                          } as AutocompleteOption
                        }
                        isOptionEqualToValue={(l, r) => l.id === r.id}
                        onChange={(event: any, l: Language | null) => {
                          if (!l) return
                          setLanguage(l)
                        }}
                        options={languages}
                        sx={{ width: 250, height: 30 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Language" />
                        )}
                      />
                      <div>
                        <button
                          type="submit"
                          onClick={submit}
                          className="text-xl p-3.2 px-4 mt-0.3 my-0 m-2 mb-auto rounded ring-1 hover:ring-2 active:bg-gray-100"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    {submitting ? <LinearProgress /> : <div />}
                    {message && <div className="text-right m-3">{message}</div>}
                  </div>
                ) : (
                  <div className="m-auto py-4 md:max-w-1/2">
                    <div className="text-center">
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
