import React from 'react'
import HocComponent from './HocComponent';

 function ClickCounter(props) {
    const {counter,UpdateCounter} = props;
  return (
    <div>
        <div>{counter}</div>
        <div><button onClick={UpdateCounter}>Click me</button></div>


    </div>
  )
}
export default HocComponent(ClickCounter);
