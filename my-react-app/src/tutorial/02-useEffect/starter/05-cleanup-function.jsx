import { useEffect, useState } from "react";

const CleanupFunction = () => {
  console.log('render');
  

  const [value, setValue] = useState(false);
  return (
    <div>
    <button className="btn" onClick={()=>{setValue(!value)}}>Toggle Me {!value ? 'false' : 'true'}</button>
    {value && <SomeComponent />}
    </div>
  )
};

const SomeComponent = ()=>{

  useEffect(()=>{
    const someFunc = () =>{

    }

    window.addEventListener("scroll", someFunc);

    return () => window.removeEventListener("scroll", someFunc);
  }, [])

  return(
    <h2>Whatever Component</h2>
  )
}

// Below is used for us to see that cleanup is called after re-render

// const SomeComponent = ()=>{

//   useEffect(()=>{
//     // console.log("Called Once");
//     const idInt = setInterval(()=>{
//       // console.log('hello from interval');
      
//     }, 1000);

//     return () => {
//       clearInterval(idInt);
//       console.log('cleanup');
//     }

//   }, [])

//   return(
//     <h2>Whatever Component</h2>
//   )
// }

export default CleanupFunction;
