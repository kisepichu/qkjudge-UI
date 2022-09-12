import axios from 'axios'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useBeforeLoginMutators } from '../states/beforeLogin'
import { useUserMutators, useUserState } from '../states/userState'

interface From {
  pathname: string
}

interface LoginState {
  from: From | null
}

function Signup() {
  const setBeforeLogin = useBeforeLoginMutators()
  useEffect(() => {
    setBeforeLogin('/')
  }, [])

  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [password2Input, setPassword2Input] = useState('')
  const [result, setResult] = useState('')
  const user = useUserState()
  const setUser = useUserMutators()
  const navigate = useNavigate()
  const location = useLocation()
  function login(username: string, password: string) {
    setResult('created. logging in...')
    const url = `${import.meta.env.VITE_API_URL}/user/login`
    axios
      .post(
        url,
        {
          username,
          password
        },
        { withCredentials: true }
      )
      .then((res) => {
        const state = location.state as LoginState
        if (res.status === 200) {
          if (state?.from != null) {
            navigate(state.from.pathname)
          } else {
            navigate('/')
          }
          setUser(username)
          setResult('')
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
  function signup() {
    if (passwordInput !== password2Input) {
      setResult("passwords don't match")
      return
    }
    setResult('sending...')
    const url = `${import.meta.env.VITE_API_URL}/user/signup`
    const usernameSent = usernameInput
    const passwordSent = passwordInput
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
        if (res.status === 201) {
          login(usernameSent, passwordSent)
        }
      })
      .catch((err) => {
        if (Axios.isAxiosError(err) && err.response) {
          if (err.response.status === 409) {
            setResult(`username ${usernameSent} is already taken`)
          } else if (err.response.status === 400) {
            setResult('bad request')
          }
        }
      })
  }
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100 pb-4">
      <div className="m-auto p-4 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl mb-6 md:(text-3xl mb-8)">Sign up</h1>
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
                  document.getElementById('inputPassword2')?.focus()
                }
              }}
              className="border-2 outline-0 focus:(ring-1 shadow-md)"
            />
          </div>
          <div className="m-2 flex justify-end">
            <div className="mx-4">retype password</div>
            <input
              type="password"
              id="inputPassword2"
              onChange={(e) => setPassword2Input(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  signup()
                }
              }}
              className="border-2 outline-0 focus:(ring-1 shadow-md)"
            />
          </div>
          <div className="m-2 flex justify-end">
            <div className="text-base m-2">{result}</div>
            <button
              type="submit"
              onClick={signup}
              className=" px-2 p-1 mx-0.5 my-0 mb-auto rounded ring-1 hover:ring-2 active:bg-gray-100"
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
