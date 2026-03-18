import { Routes, Route } from 'react-router-dom'
import { Home, Upload } from './components'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  )
}
