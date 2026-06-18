import "./weather.css";

const Weather = (props) => {
    console.log("getting data", props);
    return (
        <div className="rain">
            <img src= {props?.getData?.current?.condition?.icon} />
            <h1>{props?.getData?.current?.condition?.text}</h1>
            <h1>{props?.getData?.location?.name}</h1>
            <h1>{props?.getData?.current?.temp_c}°C</h1>
            
        </div>
    )
}

export default Weather;