import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Recipe from './components/Recipe'
import Poutine from './components/Poutine'
import { useState, useEffect } from 'react'
import Markdown from 'react-markdown'

function App() {


  const [recipe, setRecipe] = useState('')
  // const [showSidebar, setShowSidebar] = useState(false)
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
      {/* {showSidebar ? <SideBar setShowSidebar={setShowSidebar} /> : <button onClick={() => setShowSidebar(true)}>Show Sidebar</button>} */}
      <div className='flex max-w-7xl mx-auto'>
        <main>
          <Markdown>{recipe}</Markdown>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
