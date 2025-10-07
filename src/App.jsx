import { useState } from 'react'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0f172a', 
      color: 'white', 
      padding: '50px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>
        🎉 IT WORKS!
      </h1>
      <h2 style={{ fontSize: '2em', color: '#6366f1' }}>
        Akhil Reddy Danda
      </h2>
      <p style={{ fontSize: '1.5em', marginTop: '20px' }}>
        Software Development Engineer
      </p>
      <p style={{ marginTop: '20px', color: '#94a3b8' }}>
        If you can see this, React is working! ✅
      </p>
      <p style={{ marginTop: '10px', color: '#94a3b8' }}>
        Now loading full 3D portfolio...
      </p>
    </div>
  )
}

export default App
