

import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import IndividualProjectPage from './pages/IndividualProjectPage'
import GrainGradientBackground from './components/ui/GrainGradientBackground'

function App() {
 

  return (
    <GrainGradientBackground >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects/:id" element={<IndividualProjectPage />} />

      </Routes>
    </GrainGradientBackground>
  )
}

export default App
