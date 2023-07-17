import React,{useState} from 'react'

function LiftStateUp3() {
    
    const [option,setOption] = useState("")
    const setOptionfun = (optionThis)=>{
        setOption(optionThis);
        console.log("ram",optionThis)
    }
    const ChildComponentDiv = (props)=>{
        return(
           <div style={{background:props.background}}>
                   <h2>Child Component {props.option}</h2>
                   <button type='text' onClick={()=>setOptionfun("Option "+props.option)} >Option {props.option}</button>
           </div>
        )
       }
  return (
    
      <div style={{background:"#73FF00"}}>
        <h1>Parent Component</h1>
        <ChildComponentDiv background="#C55E19" option="1" />
        <ChildComponentDiv background="#FDCD00" option="2" />
        {"Selected Option: "+ option}

        
      
    </div>
    
  )
}


export default LiftStateUp3
