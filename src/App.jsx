import Header from './components/Header'
import Footer from './components/Footer'
import Carbonara from './pages/Carbonara'
import Poutine from './pages/Poutine'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/poutine' element={<Poutine />} />
        <Route path='/carbonara' element={<Carbonara />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
