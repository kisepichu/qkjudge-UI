import axios from 'axios'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-text'
import 'ace-builds/src-noconflict/theme-github'
import {
  Autocomplete,
  LinearProgress,
  Menu,
  MenuItem,
  TextField
} from '@mui/material'
import languages, { editorMode, Language } from '../data/Languages'
import {
  useCustomTestSourceMutators,
  useCustomTestSourceState
} from '../states/customTestSourceState'
import { useBeforeLoginMutators } from '../states/beforeLogin'

interface PostExecuteRequest {
  language_id: number
  source: string
  input: string
}

type AutocompleteOption = Language

interface PostExecuteResponse {
  output: string
  status_code: number
  result: string
  memory: string
  cpu_time: string
}

function CustomTest() {
  const api = import.meta.env.VITE_API_URL
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  // const [source, setSource] = useState('')
  const source = useCustomTestSourceState()
  const setSource = useCustomTestSourceMutators()
  const [input, setInput] = useState('')
  const [task, setTask] = useState({
    output: '',
    status_code: -1,
    result: 'WJ',
    memory: '-1',
    cpu_time: '-1'
  } as PostExecuteResponse)
  const [language, setLanguage] = useState({
    id: 0,
    label: 'C++ 17 / GCC 11.1.0',
    language: 'C++ 17',
    language_code: 'cpp17',
    version: 'GCC 11.1.0',
    version_index: '1'
  } as Language)
  const [executing, setExecuting] = useState(false)
  const [executeLoading, setExecuteLoading] = useState(true)
  function execute() {
    setTask({
      output: '',
      status_code: -1,
      result: 'WJ',
      memory: '-1',
      cpu_time: '-1'
    } as PostExecuteResponse)
    setExecuting(true)
    setExecuteLoading(false)
    console.log({
      language_id: language.id,
      source: source.source,
      input
    } as PostExecuteRequest)
    axios
      .post<PostExecuteResponse>(
        `${api}/execute`,
        {
          language_id: language.id,
          source: source.source,
          input
        } as PostExecuteRequest,
        { withCredentials: true }
      )
      .then((res) => {
        setTask(res.data)
        console.log(res.data)
        setExecuting(false)
      })
      .catch((err) => {
        setExecuting(false)
        if (Axios.isAxiosError(err) && err.response) {
          console.log(err)
        }
      })
  }

  useEffect(() => {
    console.log(task)
    console.log(task.output)
  }, [])

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-2 md:p-6 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl m-2 mb-3 md:(text-3xl mb-6)">Custom Test</h1>
        <div className="text-xl my-2 m-auto md:max-w-11/12">
          <div className="m-2">Source</div>
          <AceEditor
            mode={editorMode(language)}
            theme="github"
            defaultValue={source.source}
            onChange={(s) => {
              setSource(s)
            }}
            name="customTestSource"
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
          <div className="m-2">Input</div>
          <AceEditor
            mode="text"
            theme="github"
            onChange={(s) => {
              setInput(s)
            }}
            name="customTestInput"
            width="100%"
            minLines={5}
            maxLines={10}
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
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
          <div>
            <button
              type="submit"
              onClick={execute}
              className="text-xl p-3.2 px-4 mt-0.3 my-0 m-2 mb-auto rounded ring-1 hover:ring-2 active:bg-gray-100"
            >
              Execute
            </button>
          </div>
        </div>
        {executing && <LinearProgress className="max-w-11/12 my-2 m-auto" />}
        <div className="text-xl m-auto md:max-w-11/12">
          <div className="m-2">Output</div>
          <AceEditor
            mode="text"
            theme="github"
            name="customTestOutput"
            value={task.output}
            readOnly
            width="100%"
            minLines={5}
            maxLines={10}
            fontSize={16}
            className="m-auto my-2 border-0 border-1 shadow rounded"
          />
        </div>
        {executeLoading || (
          <div className="table m-auto md:max-w-11/12 w-full text-base">
            <div className="text-xl m-2">Info</div>
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
              <div className="table-cell p-1.5 border">{task.cpu_time}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomTest
