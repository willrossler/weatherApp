import React from 'react'

const Card = ({ element }) => {
    return (
        <div className='bg-blue-lighter p-6 rounded-lg flex flex-col justify-center items-center'>
            <span>{element.dt_txt.substring(0, 10)}</span>
          {/*   <span>{element.dt_txt.substring(11)}</span> */}
            <span>{element.main.temp} Degrees</span>
        </div>
    );
}

export default Card
