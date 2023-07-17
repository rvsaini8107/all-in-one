import React,{useState} from 'react'

function Async() {
    const [count,setCount] = useState(0);
    function increse(){
        setCount(count+1)
        console.log(count)
        setCount(count+1)
    }
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increse}>Add +1</button>
    </div>
  )
}

export default Async
