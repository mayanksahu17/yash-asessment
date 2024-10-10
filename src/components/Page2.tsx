import { title } from 'process';
import React from 'react'

const page2 = () => {
  return (
    <div className="flex-shrink-0 w-screen h-screen bg-[#FFE500]  items-center justify-center">
      <div>
          <h1 className="text-black font-balken mr-[70%] p-10 text-5xl border-text">OUR SERVICES</h1>

      </div>
          <div className='px-10 flex'>
            <div>
            <div className=' gap-20 flex mb-10 '> 
            <Card content={"hiii there "} title = {"tjos "} bg={"bg-purple-600"}/>
            <Card content={"hiii there "} title = {"tjos "} bg={"bg-green-500"} />
            </div>
            <div className=' gap-20 flex'>
            <Card content={"hiii there "} title = {"tjos "} bg={"bg-blue-600"}/>
            <Card content={"hiii there "} title = {"tjos "} bg={"bg-orange-600"}/>
            </div>

            </div>
            <div className='bg-purple-500 border-black border-2 text-white font-bold text-2xl p-2 w-[200px] h-10 transform -rotate-90 mt-52 ml-40 rounded-md'>
                OUR SERVICES
            </div>
           
          </div>
         
         
        </div>
        
  )
}

const Card =({title , content ,bg} : any)=>{
  return(
  
  <>
  <div
  className={`${bg} h-[200px] w-[400px]  rounded-sm `}
  >

  <h1 className='font-semibold text-black text-2xl ml-3 p-3'>{title}</h1>
  <p className='text-black px-3'>{content}</p>
  </div>
  </>
  )
}


export default page2


