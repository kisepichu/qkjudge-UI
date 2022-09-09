import { Typography } from '@mui/material'

function Home() {
  console.log('Home')
  return (
    <div className="max-w-full p-64 bg-local bg-gradient-to-bl from-heroyellow-100 to-herocyan-100 text-center">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          fontFamily: '"Trebuchet MS", sans-serif',
          fontSize: '48px',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        QK Judge
      </Typography>
      <div className="text-2xl m-1 font-jp text-gray-500">
        <p>競技プログラミングの</p>
        <p>問題が解けるサイトです。</p>
      </div>
    </div>
  )
}

export default Home
