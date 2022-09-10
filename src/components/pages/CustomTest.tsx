import axios from 'axios'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-rust'
import 'ace-builds/src-noconflict/mode-haskell'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/theme-github'
import {
  Autocomplete,
  LinearProgress,
  Menu,
  MenuItem,
  TextField
} from '@mui/material'
import languages, { Language } from '../data/Languages'

interface Problem {
  problem_id: number
  title: string
  author: string
  difficulty: number
}

interface GetProblemsResponse {
  problems: Problem[]
}

interface PostExecuteRequest {
  language: string
  language_version: string
  source: string
  input: string
}

type AutocompleteOption = Language

interface PostExecuteResponse {
  output: string
}

function CustomTest() {
  // console.log('Problems')
  const api = import.meta.env.VITE_API_URL
  const [problems, setProblems] = useState<Problem[]>([])
  const [source, setSource] = useState('')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState({
    id: 0,
    label: 'C++ 17 / GCC 11.1.0',
    language: 'C++ 17',
    language_code: 'cpp17',
    version: 'GCC 11.1.0',
    version_index: '1'
  } as Language)
  const [executing, setExecuting] = useState(false)
  function execute() {
    setExecuting(true)
    console.log({
      language: language.language_code,
      language_version: language.version_index,
      source,
      input
    })
    axios
      .post<PostExecuteResponse>(
        `${api}/execute`,
        {
          language: language.language_code,
          language_version: language.version_index,
          source,
          input
        } as PostExecuteRequest,
        { withCredentials: true }
      )
      .then((res) => {
        setOutput(res.data.output)
        setExecuting(false)
      })
      .catch((err) => {
        if (Axios.isAxiosError(err) && err.response) {
          console.log(err.response.status)
        }
      })
  }

  useEffect(() => {
    axios
      .get<GetProblemsResponse>(`${api}/problems`, { withCredentials: true })
      .then((res) => {
        setProblems(res.data.problems)
      })
  }, [])

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-2 md:p-6 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl m-2 mb-3 md:(text-3xl mb-6)">Custom Test</h1>
        <div className="text-xl m-auto md:max-w-11/12">
          <div className="m-2">Source</div>
          <AceEditor
            mode="python"
            theme="github"
            onChange={(s) => {
              setSource(s)
            }}
            name="source"
            width="100%"
            // setOptions={{
            //   enableBasicAutocompletion: true,
            //   enableLiveAutocompletion: true,
            //   enableSnippets: true
            // }}
            minLines={10}
            maxLines={30}
            className="m-auto my-2 border-0 border-1 shadow rounded"
          />
          <div className="m-2">Input</div>
          <AceEditor
            mode="text"
            theme="github"
            onChange={(s) => {
              setInput(s)
            }}
            name="input"
            width="100%"
            minLines={5}
            maxLines={10}
            className="m-auto my-2 border-0 border-1 shadow rounded"
          />
        </div>
        <div className="flex">
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
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
          <div>
            <button type="submit" onClick={execute}>
              Execute
            </button>
          </div>
        </div>
        {executing ? <LinearProgress /> : <div />}
        <div>{output}</div>
      </div>
    </div>
  )
}

export default CustomTest
