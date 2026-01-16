import { Routes, Route } from 'react-router-dom'
import Count from './assets/components/count.jsx'

function Done() {
  return <h1>🎉Countdown Finished!🎉</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Count />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  )
}

export default App