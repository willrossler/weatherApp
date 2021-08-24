import './App.css';
import DataFetch from './components/ApiRequest/DataFetch';
import Layout from './components/Layout/Layout.jsx';
import LeftAside from './components/LeftAside/LeftAside';
import RightAside from './components/RightAside/RightAside';
import React, { useEffect, useState } from "react";



function App() {

  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=59.342848&lon=18.068275&appid=abfae41f970e5def4cb069c1c6e5e4a1')
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  

  return (
    
  <Layout>
    <DataFetch />
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10">
      <aside className="col-span-1 lg:col-span-2 bg-blue-lighter h-full md:">
        <LeftAside />
      </aside>
      {/*Right aside*/}
      <aside className='col-span-1 lg:col-span-4 bg-blue-dark h-full'>
      <RightAside />
      </aside>
    </div>
  </Layout>
  );
}

export default App;
