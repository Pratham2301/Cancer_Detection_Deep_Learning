import React, { useState } from 'react'
import menu from './assets/menu.svg'
import logo from './assets/navbar_logo.png'
function Nav () {
  let Links = [
    { name: 'Home', link: '/', id: 'intro' },
    {
      name: 'Github',
      link: 'https://github.com/Pratham2301/Cancer_Detection_Deep_Learning',
      id: 'https://github.com/Pratham2301/Cancer_Detection_Deep_Learning'
    },
    // { name: 'Demo', link: '/', id: 'demo' }
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='  w-11/12 bg-white mx-auto md:my-6 z-10 align-center '>
      <div className='bg-white my-6 md:flex items-center justify-between   py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'
        >
          <img className='h-10 w-12 md:h-14 md:w-16  ' src={logo}></img>
          <h1 className='mx-2 text-gray-700 text-xl md:text-2xl lg:text-3xl font-TiltWarp1'>
            SkinGenics
          </h1>
        </div>
        {/* <i class="fa-solid fa-bars" style="color: #d5ddeb;"></i> */}
        <div
          onClick={() => setOpen(!open)}
          className='  text-3xl absolute right-8 top-6 cursor-pointer md:hidden  h-2'
        >
          {/* <ion-icon  class="bg-white  " name={open ? "close" : "menu"}></ion-icon> */}
          <img src={menu} className=' font-mavenpro h-6 w-6 z-10  mt-5' />
        </div>

        <ul
          className={` font-mavenpro text-xl text-gray-500  md:flex md:items-center md:pb-0 pb-12 absolute md:static   bg-gray-100 md:bg-white md:z-auto z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-24 ' : 'top-[-490px]'
          }`}
        >
          {Links.map(link => (
            <li
              key={link.name}
              className='font-mavenpro md:ml-8 text-xl md:my-0 my-7'
            >
              <a
                href={`${link.link}`}
                target='_blank'
                className='font-mavenpro text-bluelight text-xl hover:text-gray-800 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>
          Get Started
        </Button> */}
        </ul>
      </div>
    </div>
  )
}

export default Nav
