import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function page() {
  return (
   

    <div className=' h-screen  text-slate-900 text-sm mt-16  md:text-xl md:mt-32 indent-2  '>
            <div className='p-8  flex  flex-col bg-white   rounded-2xl mx-12 md:mx-48 lg:mx-56 xl:mx-72 '>
            <div className='mr-auto -mt-6 mb-2 -ml-8'> <FontAwesomeIcon size="2xl" icon={faPaperclip} /> </div>
                <p className='  textbold-custom  '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime nam rerum non possimus vel placeat debitis enim, similique iusto illo accusamus eos obcaecati voluptatibus aliquam alias nostrum ex perferendis.

                </p>
                
            </div>
        </div>
  )
}

export default page