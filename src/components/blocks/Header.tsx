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

function Header() {
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
  // const [loading, setLoading] = useState(true)
  // function check() {
  //   const url: string = `${import.meta.env.VITE_API_URL}/whoami`
  //   axios
  //     .get(url, { withCredentials: true })
  //     .then((res) => {
  //       setUser(res.data)
  //       setLoading(false)
  //     })
  //     .catch(() => {
  //       setUser('-')
  //       setLoading(false)
  //     })
  // }
  // useEffect(() => {
  //   check()
  // }, [])
  return (
    <header className="z-index-10 flex md:p-1 justify-between border-2 border-gray-200 sticky top-0 bg-white">
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
      <div className="flex justify-end text-md md:text-lg">
        <Link
          to="/problems"
          className="hidden md:block my-auto mx-1 p-2 active:bg-gray-100"
        >
          Problems
        </Link>
        <Link
          to="/submissions"
          className="hidden md:block my-auto mx-1 p-2 active:bg-gray-100"
        >
          Submissions
        </Link>
        <Link
          to="/custom_test"
          className="hidden md:block my-auto mx-1 p-2 active:bg-gray-100"
        >
          Custom Test
        </Link>
        <React.Fragment key="top">
          <button
            type="button"
            className="md:hidden"
            onClick={() => {
              setDrawerOpened(true)
            }}
          >
            Menu
          </button>
          <Drawer
            anchor="top"
            open={drawerOpened}
            className="divide-y"
            onClose={() => {
              setDrawerOpened(false)
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component={Link}
              onClick={() => {
                setDrawerOpened(false)
              }}
              to="/"
              sx={{
                mr: 2,
                padding: '1rem',
                fontSize: '18px',
                fontFamily: '"Trebuchet MS", sans-serif',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              QK Judge
            </Typography>
            <Link
              to="/problems"
              onClick={() => {
                setDrawerOpened(false)
              }}
              className="my-auto p-2 active:bg-gray-100"
            >
              Problems
            </Link>
            <Link
              to="/submissions"
              onClick={() => {
                setDrawerOpened(false)
              }}
              className="my-auto p-2 active:bg-gray-100"
            >
              Submissions
            </Link>
            <Link
              to="/custom_test"
              onClick={() => {
                setDrawerOpened(false)
              }}
              className="md:block my-auto p-2 active:bg-gray-100"
            >
              Custom Test
            </Link>
          </Drawer>
        </React.Fragment>
        <div className={user.username ? '' : ''}>
          <Box sx={{ flexGrow: 0 }}>
            {user.username ? (
              <Tooltip title={user.username || 'Log in'}>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    width: 40,
                    height: 40,
                    margin: '12px',
                    '& svg': {
                      fontSize: 36
                    }
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                title={user.username || 'Log in'}
                sx={{ margin: 'auto', marginBottom: '0px' }}
              >
                <IconButton
                  sx={{
                    p: 0,
                    width: 40,
                    height: 40,
                    margin: '12px',
                    '& svg': {
                      fontSize: 36
                    }
                  }}
                >
                  <Link to="/login" className="m-0 p-0 flex justify-between">
                    <LoginRounded />
                  </Link>
                </IconButton>
              </Tooltip>
            )}

            <Menu
              sx={{
                mt: '24px',
                '@media (min-width: 768px)': {
                  mt: '45px'
                }
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem key={user.username} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem> */}
              <MenuItem
                key="logout"
                onClick={() => {
                  handleCloseUserMenu()
                  logout()
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </div>
    </header>
  )
}

export default Header
