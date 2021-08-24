import React from 'react'

const InfoCard = () => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-4'>
            <div className='flex-col text-center'>
                <p>Temperature</p>
                <div className='flex justify-center items-center p-3'>
                    <span className='text-5xl font-bold'>
                        12
                        <span>
                            <sub className='ml-2 text-gray-300'>°C</sub>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
