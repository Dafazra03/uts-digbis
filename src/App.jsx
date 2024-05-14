import { useState } from 'react'
import reactLogo from '/logo_amikom_full_color.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Atilia Dhaffazra Hermawan - 21.11.4243</h3>
      <h3>Muhammad Rizky Febrianto - 21.11.4222</h3>
      <h3>Mohammad Dwi Turangga Lazuardi - 21.11.4209</h3>
      
    </>
  )
}

export default App
