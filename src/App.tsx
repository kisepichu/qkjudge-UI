import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Problems from './components/pages/Problems'
import Submissions from './components/pages/Submissions'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import NotFound from './components/pages/404'
import Redirect from './components/pages/Redirect'

const ROUTER_BASENAME = '/qkjudge'

function App() {
  return (
    <div className="flex">
      <BrowserRouter basename={ROUTER_BASENAME}>
        <main>
          <div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<Redirect />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
      {/* <div className="px-8 py-6 rounded-2xl bg-gray-600 text-gray-100">
        <p>
          <a
            rel="noreferrer"
            href="https://github.com/suzukey/vite_windi_sample"
            target="_blank"
          >
            Vite + React + WindiCSS
          </a>
        </p>
        <p>
          <em className="text-sm opacity-75">Soooo fast!</em>
        </p>
      </div> */}
    </div>
  )
}

export default App
