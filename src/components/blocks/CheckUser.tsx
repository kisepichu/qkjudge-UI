import * as React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { useUserMutators, useUserState } from '../states/userState'

interface GetWhoamiResponse {
  username: string
}

function CheckUser() {
  const setUser = useUserMutators()
  const [loading, setLoading] = useState(true)
  function check() {
    const url: string = `${import.meta.env.VITE_API_URL}/user/whoami`
    axios
      .get<GetWhoamiResponse>(url, { withCredentials: true })
      .then((res) => {
        setUser(res.data.username)
        setLoading(false)
      })
      .catch(() => {
        setUser('')
        setLoading(false)
      })
  }
  useEffect(() => {
    check()
  }, [])
  return loading ? <div /> : <Outlet />
}

export default CheckUser
