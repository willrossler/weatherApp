import React from 'react'

const SunDown = () => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-4'>
            <div className='flex-col text-center'>
                <p>Sunrise and sunset</p>
                <div className='flex justify-center items-center p-3'>
                    <span className='text-5xl font-bold'>
                        12:00
                    </span>
                    <span className='text-5xl font-bold ml-5'>
                        23:00
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SunDown
