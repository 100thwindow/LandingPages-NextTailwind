import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faWrench  } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

  return (
    <div>

      <div className="h-full container-custom" >
        <img className="w-screen   opacity-90 " src="../skyscraper.jpg" />
        <div className=" text-orbitron text-black  text-3xl md:text-8xl  absolute inset-8 md:inset-64 md:right-[300px] ">
          
             YAPI  DENETİM
          
          <div className="textlight-custom2   text-sm md:text-lg">Müşteri Memnuniyeti Odaklı</div>
          <div className=" flex  justify-center"><button className=" rounded border-2   hover:bg-slate-300  hover:text-blue-950  p-1 px-4 mt-2 md:p-2  md:px-8  border-blue-950  text-sm textlight-custom2">Bize Ulaşın &#62; </button></div>
        </div>
      </div>

      <div>31313131</div>  
    
    </div>

  )
}
