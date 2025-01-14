import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-2'>Want tips and tricks to optimize your data? </h1>
                <p> Sign up to our newsletter and be in the know</p>
            </div>
            <div className='my-4'>
                <div className=' flex felx-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df61] text-black rounded-md font-medium my-6 mx-auto py-3 ml-4 w-[200px] '>Notify Me</button>
                </div>
                <p> We care about your data. Read our <span className='text-[#00df61]'>Privacy Policy.</span> </p>
            </div>

        </div>
        
    </div>
  )
}

export default Newsletter