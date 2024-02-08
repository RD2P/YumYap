import React from 'react'
import logo from '/assets/yumyap.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex items-center py-4 justify-between mb-12 shadow-lg bg-primary px-12'>

      <div className=''>
        <img src={logo} width={70} className='' />
      </div>

      <Link to='/'>Home</Link><br></br>
      <Link to='/poutine'>Poutine</Link><br></br>
      <Link to='/carbonara'>Carbonara</Link>
    </nav>
  )
}

export default Header
