import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const API_KEY = '9e68da0e4989744ca638b1a51d71d937';
  const getWeatherData = async () => {
    if (search.length === 0) {
      return alert('Please enter something.');
    }
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`
    );
    console.log(res.data);
    setWeather(res.data);
  };

  //with headers api call
  // const res = await axios.get(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`,
  //   {
  //     headers: {
  //       'X-RapidAPI-Key':
  //         '108d301970msh68dbe6d39fbf202p1139ddjsn6eb50b9aa735',
  //       'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  //     },
  //   }
  // );

  return (
    <>
      <div>
        <input onChange={(e) => setSearch(e.target.value)} />
        <button onClick={getWeatherData}>Search</button>
      </div>
      {weather.name && (
        <div>
          <h1>Weather</h1>
          <p>City : {weather?.name}</p>
          <p>Temperature : {(weather?.main?.temp - 273).toFixed(2)}</p>
          <p>
            Sunrise :{' '}
            {new Date(weather?.sys?.sunrise * 1000).toLocaleDateString()}
          </p>
        </div>
      )}
    </>
  );
};

export default App;
