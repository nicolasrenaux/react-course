import { useState } from "react";

const UseStateGotcha = () => {

  const [value, setValue] = useState(0);
  // Abaixo pega o valor atual do estado e não o anterior..
  // const handleClick = () =>{
  //   setValue((currentState)=>{
  //     const newState = currentState +1;
  //     console.log(newState);
      
  //     return newState;
  //   });
  // }

  const handleClick = () =>{
    setTimeout(()=>{
      console.log("Click the button");
      
      setValue((currentState)=>{
        const newState = currentState + 1;
        return newState;
      });
    }, 3000)
  }

  return <div>
    <h1>{value}</h1>
    <button className="btn" onClick={handleClick}>Increase</button>
  </div>;
};

export default UseStateGotcha;
