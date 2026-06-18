
import "./input.css";

const Input = (props) => {

    
    return (
        <input className="input" type="text" placeholder="Enter City Name" onChange={props.onChange}/>
    )

}
export default Input;