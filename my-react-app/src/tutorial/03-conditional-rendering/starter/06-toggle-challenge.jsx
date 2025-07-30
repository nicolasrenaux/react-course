import { useState } from "react";

const ToggleChallenge = () => {

  const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   isClicked ? setIsClicked(false) : setIsClicked(true);
  // }

  return (
    <div>
      {/* <button onClick={handleClick} className="btn">Click Me</button> */}
      {/* Shortcut below */}
      <button onClick={()=> setIsClicked(!isClicked)} className="btn">Click Me</button>
      {/* {isClicked ? <SomeComponent/> : ''} */}
      {isClicked && <SomeComponent/>}
    </div>
  );
};

const SomeComponent = () => {
  return (
    <h2>Heyy u clicked the button</h2>
  )
}

export default ToggleChallenge;
