import React from 'react'

const NavBar = () => {
  return (
    <div>
       <nav className='flex justify-center'>
          <ul className='flex justify-between w-1/2'>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar
