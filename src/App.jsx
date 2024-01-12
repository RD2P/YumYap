import Header from './components/Header'
import Footer from './components/Footer'
import Recipe from './components/Recipe'


function App() {

  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto'>
        <Recipe />
      </div>
      <Footer />
    </>
  )
}

export default App
