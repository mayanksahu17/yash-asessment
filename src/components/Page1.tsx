import React from 'react'

function page1() {
  return (
    <>
   
      {/* Page 1 */}
      <div className="flex-shrink-0 w-screen h-screen bg-[#D41B47] flex items-center justify-center">
      <div className='bg-[#9B5DE6] w-[10%] h-screen '>
        <h1 className='text-white text-3xl m-[20%] font-balken'> Bagora</h1>
      </div>
      <div className='w-[90%] h-screen '>
        {/* the top button  */}
        <button className='bg-white mt-10 ml-[90%] text-black border-x-2 rounded-sm shadow h-10 w-24 font-balken'> Get in touch</button>
        {/* hey there section  */}
        <div className='text-5xl  font-balken text-white  mt-10 ml-10'>
          HEY THERE !
        </div>
        <div className='text-7xl text-white font-balken mt-5 ml-10 border-text'>
        WE ARE BAGORA - THE BEST
        </div>
        <div className='text-4xl text-white font-balken mt-10 ml-10'>
        Top PERFORMING AGENCY               
        </div>
      <div className='w-56 h-10 bg-[#9B5DE6] rounded ml-10 p-2 mt-10'>
         <h1 className='text-xl font-balken text-center  '>LET&apos;S GET STARTED !</h1>
        </div>

      </div>
  </div>
  </>
  )
}

export default page1