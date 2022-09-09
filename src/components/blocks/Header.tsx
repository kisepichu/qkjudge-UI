import * as React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
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

const settings = ['Profile', 'Logout']

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
  return (
    <header className="flex md:p-2 justify-between border-2 border-gray-200">
      <div className="my-auto">
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          sx={{
            mr: 2,
            padding: '1rem',
            fontSize: '18px',
            fontFamily: '"Trebuchet MS", sans-serif',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            '@media (min-width: 768px)': {
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
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Guest">
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </header>
  )
}

export default Header
