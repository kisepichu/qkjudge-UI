import LoginBlock from '../blocks/LoginBlock'

function Login() {
  return (
    <div className="bg-local bg-gradient-to-bl from-heroyellow-100 to-cyan-100">
      <div className="m-auto p-4 md:p-8 max-w-11/12 shadow-lg bg-light-50">
        <h1 className="text-2xl mb-6 md:(text-3xl mb-8)">Log in</h1>
        <LoginBlock />
      </div>
    </div>
  )
}

export default Login
