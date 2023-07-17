import React,{useState} from 'react'

function LiftStateUp1() {
const [modal,setModal] = useState(false)

  return (
    <div style={{background:"#7B28DE",display:"flex",flexDirection:"column",gap:"12px"}}>
      <h1>Parent Component</h1>
      <div className="childComponent" style={{background:"#9C2122"}}>
        <h2>Child Component</h2>
        <button onClick={()=>setModal(!modal)}>Show Modal</button>
        {
          modal?ShowModal():""
        }
        
      </div>
      
    </div>
  )
}
function ShowModal(){
  return(
    <div className="modalContentDiv">
          <h2>Modal Content</h2>
          <p>This is modal content.</p>
        </div>
  )
}

export default LiftStateUp1
