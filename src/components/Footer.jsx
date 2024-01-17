import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center py-9 mt-10 shadow-lg bg-primary'>
      <div className=''>YumYap @{new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer
