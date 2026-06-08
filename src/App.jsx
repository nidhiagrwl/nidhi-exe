import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CasePage from './pages/CasePage'
import './index.css'

const CodeStreamBackground = () => {
  const [streams, setStreams] = useState([])

  useEffect(() => {
    const snippets = [
      'git commit -m "debug life"',
      'npm install sarcasm',
      'const happiness = true;',
      'while(alive) { learn(); }',
      'docker-compose up caffeine',
      'sudo rm -rf anxiety',
      'import { rant } from "nidhi"',
      'systemctl restart motivation',
      'curl -X POST /api/coffee',
      'chmod +x discoveries.sh'
    ]
    
    const newStreams = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: snippets[Math.floor(Math.random() * snippets.length)],
      left: `${(i * 7) + Math.random() * 5}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 20}s`,
      opacity: 0.1 + Math.random() * 0.2
    }))
    setStreams(newStreams)
  }, [])

  return (
    <div className="tech-bg">
      {streams.map(s => (
        <div 
          key={s.id} 
          className="code-stream"
          style={{ 
            left: s.left, 
            animationDuration: s.duration,
            animationDelay: s.delay,
            opacity: s.opacity
          }}
        >
          {s.text}
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app min-h-screen relative overflow-hidden">
        <CodeStreamBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case/:id" element={<CasePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App