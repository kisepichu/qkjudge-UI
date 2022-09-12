import * as React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
import { Box, Container } from '@mui/system'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { LoginRounded, PersonAddAltRounded } from '@mui/icons-material'
import { useUserMutators, useUserState } from '../states/userState'
import { useBeforeLoginState } from '../states/beforeLogin'

const items = ['Profile', 'Logout']
const item_guest = ['Sign up', 'Log in']

function Footer() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const [drawerOpened, setDrawerOpened] = useState(false)
  const navigate = useNavigate()
  const user = useUserState()
  const setUser = useUserMutators()
  const beforeLogin = useBeforeLoginState()
  function logout() {
    const url = `${import.meta.env.VITE_API_URL}/user/logout`
    axios.post(url, { withCredentials: true }).then(() => {
      setUser('')
      navigate(beforeLogin.pathname)
    })
  }
  return (
    <footer className="z-index-10 flex md:p-1 justify-between border-gray-200 bottom-0 bg-neutral-400 text-gray-100 min-w-full">
      <div className="my-auto">
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          sx={{
            mx: '0.2rem',
            padding: '1rem',
            fontSize: '18px',
            fontFamily: '"Trebuchet MS", sans-serif',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            '@media (min-width: 768px)': {
              mx: '0rem',
              fontFamily: '"Trebuchet MS", sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }
          }}
        >
          QK Judge
        </Typography>
      </div>
      <div className="flex justify-end text-md md:text-lg h-20 p-10">
        <div className="mb-0 m-auto">© 2022 tqk</div>
      </div>
    </footer>
  )
}

export default Footer
