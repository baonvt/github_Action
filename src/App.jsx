import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>React + Node 22 + GitHub Actions</h1>
        <p>Đây là dự án test GitHub Action 🚀</p>
        
        <div className="button-group">
          <button onClick={() => setCount((c) => c + 1)}>
            Số lần click: {count}
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div className="info">
          <h3>Thông tin dự án:</h3>
          <ul>
            <li>✅ React 18.2</li>
            <li>✅ Node.js 22.x</li>
            <li>✅ Vite 5</li>
            <li>✅ GitHub Actions Ready</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
