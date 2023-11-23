import React from 'react'

function page() {
  return (

    <div className='textbold-custom text-slate-900 flex flex-col   items-center p-8 gap-10 ' >
      
        <div className=' flex flex-col gap-3 bg-white     p-8 md:p-8  md:mt-28  border-none  rounded-2xl textbold-custom '>
          <h1 className='text-center text-2xl textbold-custom2'>İLETİŞİM</h1>

          <p>
            Uçak Mah. 43104 Sk. No: 2/5 Seyhan/ADANA

          </p>

          <p>
             +90 507 000 00 00
          </p>
          <p>
              yeteryapi@gmail.com
          </p>
        </div>
      
      <div className='w-10/12 '  >
        <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=seyhan%20u%C3%A7ak%2039%20ova%20sk%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">
          Population Estimator map</a></iframe>
      </div>
      <div className=' sm:mx-8 md:mx-32 lg:w-[600px] '>
        <form  action="https://formspree.io/f/moqoenek"
  method="POST" className="   bg-slate-400  rounded-2xl relative">
          <div className="container  px-5   py-12 mx-auto  ">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font ">
                İletişim Formu
              </h1>
              
              
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm">
                      İsminiz
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm "
                    >
                      Email Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm "
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-900 rounded text-lg">
                    Gönder
                  </button>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page