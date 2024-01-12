import React from 'react'
import logo from '/assets/yumyap.png'

const Header = () => {
  return (
    <nav className='flex items-center justify-center mb-12 py-5 shadow-lg prim-clr'>

      <div className='p-8 '>
        <img src={logo} width={70} className='' />
      </div>

      <div className=''>YumYap</div>
    </nav>
  )
}

export default Header