import {getWeatherData} from "../Api/data.js";
import "./button.css";

const Button = (props) => {

    

    return (
        <button className="btn" type="btn" onClick={props.onHandle}>Search</button>
    )
}

export default Button;