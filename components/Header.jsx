import React from 'react'
import logo from '/assets/yumyap.png'

const Header = () => {
  return (
    <nav className='flex items-center py-5 px-14 drop-shadow-lg mb-60 bg-[var(--primary-clr)]'>
      <div className='bg-red-700 p-8'>
        <img src={logo} width={60} className='' />
      </div>
      <div className='justify-self-center'>YumYap</div>
    </nav>
  )
}

export default Header
