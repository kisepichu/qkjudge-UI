import { Typography } from '@mui/material'

function Home() {
  console.log('Home')
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
      <div className="m-2">ここに提出結果の意味などの説明を書く</div>
    </div>
  )
}

export default Home
