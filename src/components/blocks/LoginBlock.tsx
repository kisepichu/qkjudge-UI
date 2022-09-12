import axios from 'axios'
import Axios from 'axios'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useBeforeLoginState } from '../states/beforeLogin'
import { useUserMutators, useUserState } from '../states/userState'

interface From {
  pathname: string
}

interface LoginState {
  from: From | null
}

function LoginBlock() {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [result, setResult] = useState('')
  const setUser = useUserMutators()
  const beforeLogin = useBeforeLoginState()
  const location = useLocation()
  const navigate = useNavigate()
  function login() {
    setResult('sending...')
    const url = `${import.meta.env.VITE_API_URL}/user/login`
    const usernameSent = usernameInput
    axios
      .post(
        url,
        {
          username: usernameInput,
          password: passwordInput
        },
        { withCredentials: true }
      )
      .then((res) => {
        const state = location.state as LoginState
        if (res.status === 200) {
          setUser(usernameSent)
          setResult('')
          navigate(beforeLogin.pathname)
        }
      })
      .catch((err) => {
        if (Axios.isAxiosError(err) && err.response) {
          if (err.response.status === 403) {
            setResult('username or password is wrong')
          } else if (err.response.status === 400) {
            setResult('bad request')
          }
        }
      })
  }
  return (
    <div>
      <div className="md:(mx-16 w-md) text-base md:text-xl">
        <div className="m-2 flex justify-end">
          <div className="mx-4">username</div>
          <input
            type="text"
            onChange={(e) => setUsernameInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                // login()
                document.getElementById('inputPassword')?.focus()
              }
            }}
            className="border-2 outline-0 focus:(ring-1 shadow-md)"
          />
        </div>
        <div className="m-2 flex justify-end">
          <div className="mx-4">password</div>
          <input
            type="password"
            id="inputPassword"
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                login()
              }
            }}
            className="border-2 outline-0 focus:(ring-1 shadow-md)"
          />
        </div>
        <div className="m-2 flex justify-end">
          <div className="text-base m-2">{result}</div>
          <button
            type="submit"
            onClick={login}
            className=" px-2 p-1 mx-0.5 my-0 mb-auto rounded ring-1 hover:ring-2 active:bg-gray-100"
          >
            log in
          </button>
        </div>
      </div>
      <div className="md:(mx-16 w-md) text-base md:text-xl flex justify-end">
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        <div className="text-sm">{'または'}</div>
        <Link
          className="mx-3 block text-sm text-blue-500 font-semibold"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default LoginBlock
