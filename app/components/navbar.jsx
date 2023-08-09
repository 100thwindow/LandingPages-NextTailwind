import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faWrench  } from '@fortawesome/free-solid-svg-icons'  



const Navbar = () => {
  return (
    <div className='   md:h-14  navbar-custom z-10 top-0 sticky flex flex-col md:flex-row items-center   '>
      <img className="  rounded-sm  md:rounded-none shadow-xs   md:h-14  md:w-72  h-[160px]" src="../logo.jpeg" alt="" />

      <ul className=" text-md text-custom text-center  md:flex md:ml-52   gap-x-9 mt-4 mb-2 text-blue-950 ">

        <li className=" p-1 hover:shadow-xl   rounded-md mb-2 ">
          <Link href="/">
            <p>Anasayfa</p>
          </Link>
        </li>

        <li className=" p-1 hover:shadow-xl  rounded-md  mb-2" >
          <Link href="/">
            <p>Hizmetlerimiz</p>
          </Link>
        </li>
        <li className=" p-1   hover:shadow-xl rounded-md  mb-2">
          <Link href="/">
            <p>Hakkımızda</p>
          </Link>
        </li>
        <li className=" p-1  hover:shadow-xl rounded-md  mb-2">
          <Link href="/">
            <p>İletişim</p>
          </Link>
        </li>
        
      </ul>
      <div className='hidden md:block md:list-none md:mr-32 md:w-8 md:ml-auto'><FontAwesomeIcon color="#102756" icon={faWrench} /></div>
    </div>




  )
}

export default Navbar

