import './App.css';
import Layout from './components/Layout/Layout.jsx';
import LeftAside from './components/LeftAside/LeftAside';
import RightAside from './components/RightAside/RightAside';
import React, { useEffect, useState } from "react";
import axios from 'axios';

var metric = true;

function getType() {
  const type = metric ? 'metric' : 'imperial';
  metric = !metric;
  return type;
}

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  async function fetchCoordinates()  {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }

  fetchCoordinates();

  function fetchWeatherData() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=59.342848&lon=18.068275&units=' + getType() + '&appid=abfae41f970e5def4cb069c1c6e5e4a1')
    .then((response) => {
      setData(response.data);
    }, (error) => {
      console.log(error);
    });
  }

  useEffect(() => {
      fetchWeatherData();
  }, [lat, long])

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10">
        <aside className="col-span-1 lg:col-span-2 bg-blue-lighter h-full md:">
          {data.city && <LeftAside fetchWeatherData={fetchWeatherData} city={data.city} tempElement={data.list[0]}/>}
        </aside>
        <aside className='col-span-1 lg:col-span-4 bg-blue-dark h-full'>
          {data && data.length !== 0 && 
          <RightAside weatherData={data.list} city={data.city} />}
        </aside>
      </div>
    </Layout>
  );
}

export default App;
