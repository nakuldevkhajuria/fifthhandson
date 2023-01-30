import React,{useState} from 'react'

const HocComponent=(WrappedComponent)=>{
function HocComponent() {
    const [counter,setCounter]=useState(0);
    const UpdateCounter=()=>{
        setCounter(counter+1)
        console.log(counter)
    }
  return (
    <div>
        <WrappedComponent counter={counter} UpdateCounter={UpdateCounter}/>
    </div>
  )
}
return HocComponent;
}

export default HocComponent