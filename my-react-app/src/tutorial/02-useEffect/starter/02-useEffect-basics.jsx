import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  // useEffects are basically functions that we can pass a condition for it to render whenever we want... in this case '[]' it will only render at mounting (first render)
  useEffect(()=>{
    const someFunc = async () =>{
      await fetch
    }
    someFunc();
    console.log("Hello from useEffect");
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
