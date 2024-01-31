import React from 'react'

const SideBar = (props) => {
  const { setShowSidebar } = props
  return (
    <aside className='bg-yellow-500 w-1/4'>
      <button onClick={() => setShowSidebar(false)}>Hide Sidebar</button>
    </aside>
  )
}

export default SideBar
