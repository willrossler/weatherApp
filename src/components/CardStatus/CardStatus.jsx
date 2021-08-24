import React from 'react'

const CardStatus = () => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-gray-300'>Wind status</p>
                <div className='flex justify-center items-center'>
                    <span className='text-5xl font-bold mt-5'>
                        5
                        <sub className='font-lighter ml-1'>kmh</sub>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardStatus
