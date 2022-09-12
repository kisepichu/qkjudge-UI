/* eslint-disable react/jsx-props-no-spreading */
import { CircularProgress, Dialog, LinearProgress } from '@mui/material'
import axios from 'axios'
import Axios from 'axios'
import { stringify } from 'postcss'
import { useEffect, useState } from 'react'
import { CodeBlock, dracula, github } from 'react-code-blocks'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AceEditor from 'react-ace'
import languages, { editorMode } from '../data/Languages'
import { useBeforeLoginMutators } from '../states/beforeLogin'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-text'
import 'ace-builds/src-noconflict/theme-github'

interface TaskSummary {
  id: number
  result: string
}

interface Submission {
  id: number
  date: string
  author: string
  problem_id: number
  testcase_num: number
  tasks: TaskSummary[]
  result: string
  language_id: number
  source: string
}

interface Task {
  id: number
  submission_id: number
  input: string
  output: string
  expected: string
  result: string
  memory: string
  cpu_time: string
}

function ProblemsPid() {
  const api = import.meta.env.VITE_API_URL
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  const params = useParams<{
    submission_id: string
  }>()
  const [loading, setLoading] = useState(true)
  const [reloading, setReloading] = useState(false)
  const [submissionNotFound, setSubmissionNotFound] = useState(true)
  const [submission, setSubmission] = useState<Submission>({
    id: 0,
    date: '0000-00-00 00:00:00',
    author: '',
    problem_id: 0,
    testcase_num: 0,
    tasks: [],
    result: 'WJ',
    language_id: -1,
    source: ''
  })
  const navigate = useNavigate()
  function copy(content: string) {
    navigator.clipboard.writeText(content)
  }
  function codeblockLanguage(s: Submission): String {
    if (languages[s.language_id]?.language.startsWith('python')) return 'python'
    if (languages[s.language_id]?.language.startsWith('cpp')) return 'cpp'
    return 'text'
  }
  function reload() {
    setReloading(true)
    axios
      .get<Submission>(`${api}/submissions/${params.submission_id}`, {
        withCredentials: true
      })
      .then((res) => {
        setSubmission(res.data)
        setSubmissionNotFound(false)
        setReloading(false)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) console.log(err.status)
        setReloading(false)
        setSubmissionNotFound(true)
        setTimeout(() => {
          navigate('/submissions')
        }, 2000)
      })
  }

  useEffect(() => {
    axios
      .get<Submission>(`${api}/submissions/${params.submission_id}`, {
        withCredentials: true
      })
      .then((res) => {
        setSubmission(res.data)
        setSubmissionNotFound(false)
        setLoading(false)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) console.log(err.status)
        setLoading(false)
        setSubmissionNotFound(true)
        setTimeout(() => {
          navigate('/submissions')
        }, 2000)
      })
  }, [])

  const [taskLoading, setTaskLoading] = useState(true)
  const [taskId, setTaskId] = useState(-1)
  const [taskNumber, setTaskNumber] = useState(-1)
  const [task, setTask] = useState({
    id: -1,
    submission_id: -1,
    input: '',
    output: '',
    expected: '',
    result: '',
    memory: '',
    cpu_time: ''
  } as Task)
  const [taskDetailsOpen, setTaskDetailsOpen] = useState(false)
  function openTaskDetails(id: number, index: number) {
    // console.log(id)
    setTaskId(id)
    setTaskNumber(index)
    setTaskLoading(true)
    setTaskDetailsOpen(true)
  }
  useEffect(() => {
    if (taskId < 0) return
    axios
      .get<Task>(`${api}/tasks/${taskId}`, {
        withCredentials: true
      })
      .then((res) => {
        setTask(res.data)
        setTaskLoading(false)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) console.log(err.status)
        setTaskLoading(false)
      })
  }, [taskId])

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-6 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        {submissionNotFound ? (
          <div>
            <div className="text-3xl mb-6 font-semibold">
              Submission Not Found
            </div>
            <div>Redirecting...</div>
          </div>
        ) : (
          <div>
            <div className="text-3xl mb-6 flex">
              <div className="mx-2">Submission </div>
              <div className="mx-1 font-semibold">#</div>
              <div className="font-semibold">{submission.id}</div>
            </div>
            {loading ? (
              <LinearProgress />
            ) : (
              <div className="">
                <div className="text-xl my-2">Source</div>
                <div className="px-2 text-base font-mono flex min-w-full">
                  <AceEditor
                    mode={editorMode(languages[submission.language_id])}
                    theme="github"
                    defaultValue={submission.source}
                    readOnly
                    name="sidSource"
                    width="100%"
                    // setOptions={{
                    //   enableBasicAutocompletion: true,
                    //   enableLiveAutocompletion: true,
                    //   enableSnippets: true
                    // }}
                    minLines={10}
                    maxLines={30}
                    fontSize={16}
                    className="m-auto my-2 border-0 border-1 shadow rounded"
                  />
                </div>
                <div className="flex">
                  <div className="text-xl my-2">Info</div>
                  {submission.result.startsWith('WJ') && (
                    <button
                      onClick={() => {
                        reload()
                      }}
                      type="button"
                      className="text-sm px-1 m-2 rounded ring-1 hover:ring-2 active:bg-gray-100"
                    >
                      Reload
                    </button>
                  )}
                </div>
                {reloading ? (
                  <LinearProgress />
                ) : (
                  <div className="table w-full text-base border rounded shadow">
                    <div className="table-row-group">
                      <div className="table-cell p-1.5 border">date</div>
                      <div className="table-cell p-1.5 border">
                        {submission.date}
                      </div>
                    </div>
                    <div className="table-row-group">
                      <div className="table-cell p-1.5 border">problem</div>
                      <div className="table-cell p-1.5 border">
                        {submission.problem_id}
                      </div>
                    </div>
                    <div className="table-row-group">
                      <div className="table-cell p-1.5 border">user</div>
                      <div className="table-cell p-1.5 border">
                        {submission.author}
                      </div>
                    </div>
                    <div className="table-row-group">
                      <div className="table-cell p-1.5 border">language</div>
                      <div className="table-cell p-1.5 border">
                        {languages[submission.language_id]?.label}
                      </div>
                    </div>
                    <div className="table-row-group">
                      <div className="table-cell p-1.5 border">result</div>
                      <div className="table-cell p-1.5 border">
                        {submission.result}
                      </div>
                    </div>
                  </div>
                )}
                <div className="text-xl my-2">Testcases</div>
                <div className="table w-full text-base border rounded shadow">
                  <div className="table-row-group">
                    <div className="table-cell p-1.5 w-auto border font-bold">
                      #
                    </div>
                    <div className="table-cell p-1.5 w-auto border font-bold">
                      result
                    </div>
                    <div className="table-cell p-2 w-0 block border font-bold">
                      details
                    </div>
                  </div>

                  {submission.tasks.map((v: TaskSummary, i) => (
                    <div className="table-row-group" key={`tasks_${v.id}`}>
                      <div className="table-cell p-1.5 border">#{i}</div>
                      <div className="table-cell p-1.5 border">{v.result}</div>
                      <button
                        type="button"
                        className="table-cell p-2 mr-0 w-18 block border font-bold text-blue-500 hover:(underline bg-gray-100) outline-0"
                        onClick={() => {
                          openTaskDetails(v.id, i)
                        }}
                      >
                        See
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Dialog
        onClose={() => {
          setTaskDetailsOpen(false)
          setTaskId(-1)
        }}
        open={taskDetailsOpen}
        maxWidth="lg"
        fullWidth
      >
        <div className="">
          <div className="text-xl my-2 m-auto md:max-w-11/12 min-w-xs">
            <div className="text-2xl my-4 m-2">Task #{taskNumber}</div>

            {taskLoading ? (
              <LinearProgress />
            ) : (
              <div>
                <div className="m-2">Input</div>
                <AceEditor
                  mode="text"
                  theme="github"
                  defaultValue={task.input}
                  name="sidInput"
                  width="100%"
                  readOnly
                  minLines={5}
                  maxLines={5}
                  fontSize={16}
                  className="m-auto my-2 border-0 border-1 shadow rounded"
                />
                <div className="m-2">Output</div>
                <AceEditor
                  mode="text"
                  theme="github"
                  defaultValue={task.output}
                  name="sidOutput"
                  width="100%"
                  readOnly
                  minLines={5}
                  maxLines={5}
                  fontSize={16}
                  className="m-auto my-2 border-0 border-1 shadow rounded"
                />
                <div className="m-2">Expected</div>
                <AceEditor
                  mode="text"
                  theme="github"
                  defaultValue={task.expected}
                  name="sidExpected"
                  width="100%"
                  readOnly
                  minLines={5}
                  maxLines={5}
                  fontSize={16}
                  className="m-auto my-2 border-0 border-1 shadow rounded"
                />
                <div className="m-2">Info</div>
                <div className="table w-full text-base border rounded shadow">
                  <div className="table-row-group">
                    <div className="table-cell p-1.5 border">result</div>
                    <div className="table-cell p-1.5 border">{task.result}</div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-cell p-1.5 border">memory</div>
                    <div className="table-cell p-1.5 border">{task.memory}</div>
                  </div>
                  <div className="table-row-group">
                    <div className="table-cell p-1.5 border">cpu time</div>
                    <div className="table-cell p-1.5 border">
                      {task.cpu_time}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default ProblemsPid
