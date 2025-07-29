import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () =>{
    console.log("Hello There");
    // Be careful, code below will trigger infinite loop
    // Happens because the function will always be called at every re-render... and setValue re-renders when it's called. There's the loop.
    // setValue(value + 1);
  }

  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
