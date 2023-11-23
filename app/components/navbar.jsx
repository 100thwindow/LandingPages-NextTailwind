"use client"

import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation'




const Navbar = () => {

  const path = usePathname()
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(path)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    
      <div className={`md:sticky textlight-custom2  text-sm top-0 flex flex-col lg:flex-row  items-center 
           ${window?.scrollY > 0 ?  " md:bg-white" : "" }  `} >
        <img className=" rounded-md xl:ml-32  2xl:ml-48    md:rounded-sm  shadow-xs  md:h-16  md:w-72  h-[160px]" src="../logo.jpeg" alt="" />

        <ul className="text-md text-custom text-center  md:flex  lg:ml-24 xl:ml-48 2xl:ml-64  gap-x-12 mt-4 mb-2 text-slate-900 ">

          <li className="  active:text-lime-500   p-1 border-b-slate-900 border-b-2  mb-2 ">
            <Link href="/">
              <p>Anasayfa</p>
            </Link>
          </li>

          <li className="   active:text-lime-500 p-1  hover:border-b-slate-900 hover:border-b-2 mb-2" >
            <Link href="/hizmetlerimiz">
              <p>Hizmetlerimiz</p>
            </Link>
          </li>
          <li className=" p-1 active:text-lime-500  hover:border-b-slate-900  hover:border-b-2  mb-2">
            <Link href="/hakkimizda">
              <p>Hakkımızda</p>
            </Link>
          </li>
          <li className=" p-1 active:text-lime-500  hover:border-b-slate-900 hover:border-b-2  mb-2">
            <Link href="/iletisim">
              <p>İletişim</p>
            </Link>
          </li>

        </ul>
        <div className='hidden   lg:mr-48 md:w-8 '><FontAwesomeIcon icon={faWrench} fade size="2xl" /></div>
      </div>


    

  )
}

export default Navbar

