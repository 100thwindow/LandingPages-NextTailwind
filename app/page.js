"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench,faShare } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'


export default function Home() {

  const router = useRouter()

  const clickHandler = () => {
    router.push("/iletisim")
  }

  return (


    

      <div className=" text-orbitron  h-screen md:text-slate-900 text-white text-4xl md:text-7xl flex flex-col  text-center  mt-24 md:mt-48 ">

        <h1 className='flex justify-center'> YETER YAPI LABORATUVAR HİZMETLERİ </h1>

        <div className="textlight-custom2   text-sm md:text-lg"> Müşteri Memnuniyeti Odaklı </div>

        <div><button onClick={clickHandler} className=" rounded border-2    bg-slate-900 text-white hover:bg-white hover:text-slate-900 p-1 px-4
         mt-2 md:p-2  md:px-8  border-slate-900  text-sm textlight-custom2">Bize Ulaşın &nbsp; <FontAwesomeIcon icon={faShare} beat /> </button>
        </div>
         
      </div>
      
      
    


  )
}
