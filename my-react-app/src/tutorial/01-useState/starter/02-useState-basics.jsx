import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
//  const value = useState('hello')[0];
//  const func = useState('hello')[1];
//   console.log(value);
//   console.log(func);

const [count, setCount ] = useState(0);

const handleClick = ()=>{
  setCount(count + 1);
}
  
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h4>You clicked {count}</h4> 
    </div>
  )
};

export default UseStateBasics;
