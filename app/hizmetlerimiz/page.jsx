import React from 'react'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function page() {
    return (
        <div className=' h-screen flex flex-col text-slate-900 text-sm mt-16  md:text-xl md:mt-32 indent-2  '>
            <div className='p-8  flex  flex-col bg-white rounded-2xl mx-12 md:mx-48 lg:mx-56 xl:mx-72 '>
            <div className='mr-auto -mt-6 mb-2 -ml-8'> <FontAwesomeIcon size="2xl" icon={faPaperclip} /> </div>
                <p className='  textbold-custom  '>
                    Firmamızın hizmetleri arasında; inşaat projelerinin tasarım,
                    uygulama ve  kontrol aşamalarında kalite, güvenlik ve yasalara uygunluk açısından denetlenmesi yer almaktadır.
                    Firmamız, uzman kadrosu ve  teknolojik donanımı ile müşterilerine en iyi hizmeti sunmayı amaçlamaktadır.
                    Yapı denetim hizmetlerimiz  hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.

                </p>
                
            </div>

        <img className=' mt-6 mx-4  md:hidden  lg:h-80 lg:block lg:mx-32 xl:mx-48 2xl:h-[400px] 2xl:mx-96 opacity-70  rounded-lg'  src= "../hizmetlerimiz.jpg" alt="" />
        </div>
    )
}

export default page