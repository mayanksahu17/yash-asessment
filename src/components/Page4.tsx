import React from 'react'

const page4 = () => {
  return (
    <div className="flex-shrink-0 w-screen h-screen bg-[#FF7800]  items-center justify-center">
    <div>
    <h1 className="text-black font-balken mr-[70%] p-10 text-5xl border-text">LETS TALK</h1>
    <h2 className="text-white font-balken mr-[70%] px-10 py-4 text-4xl border-text w-full">Get in touch with us and lets make magic happen.
    </h2>
      </div>
      <div className='flex gap-10 px-10'>
      <div className='w-[600px] h-[400px] bg-white'>
        <div>
        <p>Name*</p>
        <input type="text" className='w-10 h-4 bg-gray-400' />
        </div>
      </div>
     
      </div>
     
      
        </div>
  )
}

export default page4

