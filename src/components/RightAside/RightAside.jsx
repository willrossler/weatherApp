import React from 'react'
import Card from '../Card/Card'
import CardStatus from '../CardStatus/CardStatus'
import HourCards from '../HourCards/HourCards'
import HumidityCard from '../HumidityCard/HumidityCard'
import InfoCard from '../InfoCard/InfoCard'
import SunDown from '../SunDown/SunDown'
import _ from 'lodash';

function getFiveDays() {
    const today = new Date();
    const dayArray = [];
    for (var i = 0; i < 5; i++) {
        dayArray.push(today.toISOString().split('T')[0]);
        today.setDate(today.getDate() + 1);
    }
    return dayArray;
}

const RightAside = ({ weatherData, city }) => {
    return (
        
        <div className='flex-col justify-center items-center text-white'>
            <p className='text-4xl font-bold mt-6 ml-4'>5 day forecast</p>
            <div className='grid grid-cols-2 sm:grid-cols-2 md: grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2'>
                {weatherData && getFiveDays().map(date =>
                    <Card key={date} element={_.find(weatherData, function (element) { return element.dt_txt.substring(0, 10) === date })} />
                )}
            </div>

            <div className='grid grid-cols-1 gap-2 sm:grid-cols- md:grid-cols-2 m-2'>
                { weatherData && <React.Fragment> <CardStatus windElement={weatherData[0].wind} />
                <HumidityCard humidElement={weatherData[0].main} /></React.Fragment>}
                <InfoCard tempElement={weatherData[0].main} />
                <SunDown sunrise={city.sunrise} sunset={city.sunset} />
                <div className='flex justify-start items-center mt-6 ml-4'>
                    <p className='text-4xl font-bold'>3 hour prognosis </p>
                </div>
            </div>
            <div className='flex-col justify-center items-center text-white'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md: grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2'>
                    {weatherData && weatherData.slice(0, 5).map(element => (
                        <HourCards element={element} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default RightAside
