import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBeforeLoginMutators } from '../states/beforeLogin'

function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [])

  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-6 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        <div className="text-2xl m-2">404</div>
        <div className="text-xl m-2">redirecting...</div>
      </div>
    </div>
  )
}

export default NotFound
