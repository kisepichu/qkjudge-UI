import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useLocation } from 'react-router-dom'
import readme from '../data/Readme'
import { useBeforeLoginMutators } from '../states/beforeLogin'

function Home() {
  const setBeforeLogin = useBeforeLoginMutators()
  const location = useLocation()
  useEffect(() => {
    setBeforeLogin(location.pathname)
  }, [])

  return (
    <div>
      <div className="max-w-full bg-local p-16 md:p-64 bg-gradient-to-bl from-heroyellow-100 to-herocyan-100 text-center">
        <div className="text-xl">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontFamily: '"Trebuchet MS", sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              color: 'inherit',
              textDecoration: 'none',

              '@media (min-width: 768px)': {
                fontFamily: '"Trebuchet MS", sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }
            }}
          >
            QK Judge
          </Typography>
        </div>
        <div className="text-md md:text-2xl m-1 font-jp text-gray-500">
          <p>競技プログラミングの</p>
          <p>問題が解けるサイトです。</p>
        </div>
      </div>
      <div className="my-5 bg-local">
        <div className="m-auto p-2 md:p-6 max-w-11/12 shadow bg-cyan-50 text-base md:text-xl">
          <div className="text-2xl font-bold flex">
            <div className="font-icon">QK Judge</div>
            <div className="mx-2"> って?</div>
          </div>
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Home
