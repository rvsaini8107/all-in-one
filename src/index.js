import React from 'react';
import ReactDOM  from 'react-dom';
import App from "./App"
import "./style.css"

function Main(){
    return <div className='container'>
        <App/>
    </div>
}
ReactDOM.render(<Main/>,document.getElementById("root"))