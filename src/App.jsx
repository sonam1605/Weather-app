import { useEffect, useState } from "react";
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import Weather from './Components/Weather/Weather'
import { getWeatherData } from "./Components/Api/data";

function App() {
  
  const [city, setCity] = useState("Patna");

  const [weatherData, setweatherData] = useState(null);

    function handleChange (e) {
        setCity(e.target.value);
        console.log(city);
    }

    const handleClick = async() => {
      const data =  await getWeatherData(city);
      console.log(data);
      setweatherData(data)
          
      }

      useEffect(() => {
        handleClick();
      },[]) 


  return (
    
    <div className='weather'>
      <h1 className='forecast'>Weather Forecast</h1>
      <div className='card'>
        <Input onChange={handleChange}/>
        <Button onHandle={handleClick}/>
        <Weather getData={weatherData}/>
      </div>
    </div>
  )
}

export default App
