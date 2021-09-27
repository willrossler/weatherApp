import React from 'react'

const CardStatus = ({ windElement }) => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-gray-300'>Wind status</p>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-5xl font-bold mt-5'>
                        {windElement.deg}
                        <sub className='font-lighter ml-1'>degree</sub>
                    </span>
                    <span className='text-5xl font-bold mt-5'>
                        {windElement.gust}
                        <sub className='font-lighter ml-1'>gust</sub>
                    </span>
                    <span className='text-5xl font-bold mt-5'>
                        {windElement.speed}
                        <sub className='font-lighter ml-1'>speed</sub>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardStatus
