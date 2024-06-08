import React from 'react'
import Laptop2 from '../assets/laptop2.jpg'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 rounded-md' src={Laptop2} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df61] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Data Centrally</h1>
                <p>
                Empower your business with data-driven insights and scalable solutions
                </p>
                <button className='bg-black text-[#00df61] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>
                    Get Started
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Analytics