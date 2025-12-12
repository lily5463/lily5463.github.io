import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-content'>
        <div className='row'>
        
          <div className='col-md-6 col-lg-6'>
            <img className="profile-image" src='https://i.redd.it/sbjq3x67fxyd1.png'/>
          </div>

          <div className='col-md-6 col-lg-6 text-start'>
            <h3>Hello, Im</h3>
            <h1>Nguon Krongly</h1>
            <h2>ងួន ក្រុងលី</h2>
            <h2>Android Native Dev, Front-End Dev</h2>
            <div>
              <p>
                I'm lazy ass and i love playing wuwa :D
              </p>
            </div>
         
          </div>
          


        </div>


        <div>
          <h1>My projects</h1>
          <ul>
            <li><a href="">Plate Recgonition</a></li>
            <li><a href="https://github.com/lily5463/Lilyium" target='_blank'>Music Player</a></li>
          </ul>
        </div>
        <div >
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
