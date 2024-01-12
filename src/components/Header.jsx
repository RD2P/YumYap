import React from 'react'
import logo from '/assets/yumyap.png'

const Header = () => {
  return (
    <nav className='flex items-center justify-center py-5 shadow-lg mb-60 prim-clr'>

      <div className='p-8 '>
        <img src={logo} width={70} className='' />
      </div>

      <div className=''>YumYap</div>
    </nav>
  )
}

export default Header
