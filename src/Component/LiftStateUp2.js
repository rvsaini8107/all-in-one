import React,{useState} from 'react'

function LiftStateUp2() {
    const [type,setType] = useState("")
    const setTypeFun = (e)=>{
        setType(e.target.value);

    }
  return (
    <div style={{background:"#73FF00"}}>
        <h1>Parent Component</h1>
        {type}
        <div style={{background:"#CC5519"}}>
            <h2>Child Component</h2>
            <input type='text' value={type} onChange={setTypeFun} placeholder='Write Something Here'  />
        </div>
      
    </div>
  )
}

export default LiftStateUp2
