import React from 'react'

const InfoCard = ({tempElement}) => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-4'>
            <div className='flex-col text-center'>
                <p>Temperature</p>
                <div className='flex justify-center items-center p-3'>
                    <span className='text-5xl font-bold'>
                    {tempElement.temp}
  
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
