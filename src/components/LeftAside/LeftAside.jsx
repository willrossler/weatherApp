import React from 'react'

const LeftAside = () => {
    return (
        <div>
            <div className='flex-col'>

            </div>
            {/* Image */}
            <div className='flex flex-col justify-start items-center h-full'>

            <p className="mt-10">
            <span className='font-extrabold text-white text-7xl'>26</span>
            <span className='font-extrabold text-white text-7xl'>C</span>
            </p>

            <p className='text-gray-50 font-bold mt-10 text-3xl'>Clear</p> 
            <p className='text-gray-50 font-bold mt-10 text-2xl'>Today</p> 
            </div>
            
            <div className='flex justify-center items-center'>
            <p className='text-gray-400 font-bold text-2xl mt-12'>
                <i class='material-icons'>location_on</i>Location</p>
            </div>
        </div>
    )
}

export default LeftAside
