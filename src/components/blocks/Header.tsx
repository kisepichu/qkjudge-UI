import * as React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Avatar,
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
  return (
    <header className="flex p-2 justify-between border-2 border-gray-200">
      <div className="m-4">
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          sx={{
            mr: 2,
            fontFamily: '"Trebuchet MS", sans-serif',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          QK Judge
        </Typography>
      </div>
      <div className="flex justify-end text-lg">
        <Link to="/problems" className="my-auto mx-3">
          Problems
        </Link>
        <Link to="/submissions" className="my-auto mx-3">
          Submissions
        </Link>
        <Link to="/custom_test" className="my-auto mx-3">
          Custom Test
        </Link>
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
            sx={{ mt: '45px' }}
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
