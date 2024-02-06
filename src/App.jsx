import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Carbonara from './pages/Carbonara'
import Poutine from './pages/Poutine'
import Home from './pages/Home'
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Markdown from 'react-markdown'

function App() {


  const [recipe, setRecipe] = useState('')
  useEffect(() => {
    import("./md/poutine.md")
      // import("./md/carbonara.md")
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setRecipe(res))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <a href='/'>Home</a>
      {/* <Link to='/'>Home</Link> */}
      <br/>
      <a href='/poutine'>Poutine</a> <br/>
      <a href='/carbonara'>Carbonara</a>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/poutine' element={<Poutine />} />
        <Route path='/carbonara' element={<Carbonara />} />
      </Routes>
      {/* <div className='flex max-w-7xl mx-auto'>
        <main>
          <Markdown>{recipe}</Markdown>
        </main>
      </div> */}
      <Footer />
    </>
  )
}

export default App
