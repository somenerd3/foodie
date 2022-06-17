import React from 'react'
import Logo from './img/img/logo.png'

const header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
        {/* desktop and tablet */}
        <div className="hidden md:flex w-full h-full ">
            <div className="flex items-center gap-2">
              <img src={Logo} className="w-10 object-cover" alt="logo"/>
            </div>
        </div>

        {/* mobile */}
        <div className="flex md:hidden w-full h-full ">

        </div>
    </div>
  )
}

export default header