import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <div className="title">
        <img
          src="/images/shrek-astrology.webp"
          alt="A coloured globe of the earth spinning around on its axis"
        />
        <h1>Navigating the worldwide routes</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <main role="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
