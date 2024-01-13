import Header from './components/Header'
import Footer from './components/Footer'
import Recipe from './components/Recipe'
import Poutine from './components/Poutine'


function App() {

  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto'>
        {/* <Recipe /> */}
        <Poutine />
      </div>
      <Footer />
    </>
  )
}

export default App
