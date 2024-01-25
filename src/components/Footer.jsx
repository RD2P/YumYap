import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center py-9 mt-10 shadow-lg bg-primary text-white'>
      <div className=''>Copyright @ {new Date().getFullYear()} YumYap</div>
    </div>
  )
}

export default Footer
