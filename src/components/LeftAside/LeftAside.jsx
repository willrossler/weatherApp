import React from 'react'

const LeftAside = ({ city, tempElement, fetchWeatherData }) => {
    return (
        <div>
            <div className='flex-col'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="primary" onClick={() => {
        fetchWeatherData()
      }}>Toggle C/F</button>
            </div>
            {/* Image */}
            <div className='flex flex-col justify-start items-center h-full'>
                <p className="mt-10">
                    <span className='font-extrabold text-white text-7xl'>{tempElement.main.temp}</span>
                 {/*   <span className='font-extrabold text-white text-7xl'>C</span> */}
                </p>
                 <p className='text-gray-50 font-bold mt-10 text-3xl'>Today</p>  
                <p className='text-gray-50 font-bold mt-10 text-2xl'>{tempElement.dt_txt.substring(0, 10)}</p>
            </div>
            <div className='flex flex-column justify-center items-center'>
                <p className='text-gray-400 font-bold text-2xl mt-12'>
                    <i className='material-icons'>location_on</i>{city.name}, {city.country}
                </p>
            </div>
        </div>
    )
}

export default LeftAside
