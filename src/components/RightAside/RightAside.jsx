import React from 'react'
import Card from '../Card/Card'
import CardStatus from '../CardStatus/CardStatus'
import HourCards from '../HourCards/HourCards'
import HumidityCard from '../HumidityCard/HumidityCard'
import InfoCard from '../InfoCard/InfoCard'
import SunDown from '../SunDown/SunDown'

const RightAside = () => {
    return (
        <div className='flex-col justify-center items-center text-white'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md: grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        

        <div className='grid grid-cols-1 gap-2 sm:grid-cols- md:grid-cols-2 m-2'>
            <CardStatus />
            <HumidityCard />
            <InfoCard  />
            <SunDown />
            <div className='flex justify-start items-center mt-6 ml-4'>
            <p className='text-4xl font-bold'>3 hour prognosis </p>
        </div>
        </div>
        <div className='flex-col justify-center items-center text-white'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md: grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2'>
                <HourCards />
                <HourCards />
                <HourCards />
                <HourCards />
                <HourCards />
            </div>
            </div>
        </div>
        
    )
}

export default RightAside
