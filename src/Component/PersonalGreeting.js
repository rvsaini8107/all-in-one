import React,{useState} from "react";
function PersonalGreeting() {
    const [name, setName] = useState("");
    const showTheName= (event)=>{
       
        setName(event.target.value)
    }
    return (
        <div>
            <label htmlFor="input-name"> Enter Your name:</label>
            <input  onChange={showTheName} type="text"  / >
            <p>{name? "Hello "+name+"!":""}</p>
                       
        </div>
        )
}
export default PersonalGreeting;