import React from 'react'

export const HourCards = ({ element }) => {
    return (
        <div className='bg-blue-lighter p-6 rounded-lg'>
            <div className='flex flex-col justify-content items-center'>
                <span>{element.dt_txt.substring(11, 16)}</span><br />
                <span>{element.main.temp} Degrees</span>
            </div>
        </div>
    )
}

export default HourCards