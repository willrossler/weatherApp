import React from 'react'

const Card = () => {
    return (
        <div className='bg-blue-lighter p-6 rounded-lg'>
            <div className='flex-col'>
                <p>
                    2020-14-10
                </p>
                <div className='flex justify-center items-center'>
                {/*image 50x50px */}

                </div>
                
            </div>
            <div classname='flex justify-between'>
                <span>22 C</span><br />
                <span>26 C</span>
            </div>
        </div>
    )
}

export default Card
