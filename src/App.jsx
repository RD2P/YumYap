import Header from './components/Header'
import Footer from './components/Footer'
import Recipe from './components/Recipe'
import Poutine from './components/Poutine'
import { useState, useEffect } from 'react'
import Markdown from 'react-markdown'

function App() {

  const [recipe, setRecipe] = useState('')
  useEffect(() => {
    import("./md/poutine.md")
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


      <div className='max-w-7xl mx-auto'>
      <Markdown>{recipe}</Markdown>

        {/* <Recipe /> */}
        {/* <Poutine /> */}
      </div>
      <Footer />
    </>
  )
}

export default App
