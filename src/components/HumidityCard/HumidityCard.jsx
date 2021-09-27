import React from 'react'

const HumidityCard = ({humidElement}) => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-gray-300'>Humidity</p>
                <div className='flex justify-center items-center'>
                    <span className='text-5xl font-bold mt-5'>
                        {humidElement.humidity}
                    <sub className='font-lighter'>
                        %
                    </sub>
                    </span>
                </div>

                <div className='flex justify-center items-center mt-10'>

            </div>
            </div>
        </div>
    )
}

export default HumidityCard
