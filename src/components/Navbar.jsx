import React,{useState} from 'react'
import {logo,menu,close} from '../assets';
import {navLinks} from '../constants'
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
       <img src={logo} alt="log" className='w-[128px] h-[32px]'/>
       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img src={toggle ? close : menu} alt={`${toggle ? 'close' : 'menu'}`} onClick={()=> setToggle(!toggle)}/>
        <div className={`${!toggle?'hidden':'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col flex-1 items-start justify-end'>
            {navLinks.map((nav,index) => (
              <li key={nav.id} className={`font-poppins font-medium cusor-pointer text-[16px] ${ active == nav.title ? 'text-white' : 'text-dimWhite'} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                <a href={`#${nav.title}`} onClick={()=>setActive(nav.title)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar