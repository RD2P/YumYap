import React from 'react'
import logo from '/assets/yumyap.png'

const Header = () => {
  return (
    <nav className='flex items-center py-4 justify-between mb-12 shadow-lg bg-primary px-12'>

      <div className=''>
        <img src={logo} width={70} className='' />
      </div>

      <div className=''>YumYap</div>
    </nav>
  )
}

export default Header
