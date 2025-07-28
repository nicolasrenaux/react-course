import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data);
  const removeItem = (id)=>{
    setPeople(people.filter((person)=>{
      return person.id !== id;
    }))
  }

  const clearAllItems = ()=>{
    console.log("clickedMe");
    
    setPeople([]);
  }

return(
  <div>

  {people.map((person) =>{
    const {id , name} = person;

    const removeItemCallback = () =>{
      removeItem(person.id)
    }
    return (
      <div key={id}>
      <h2>{name}</h2>
      <button onClick={removeItemCallback}>Remove</button>
    </div>
  );
})}
<button type="button" style={{margin: '2rem 0', background: 'purple', color: 'white', border: 'none', padding: '.4rem 2rem'}} onClick={clearAllItems}>Clear</button>
  </div>
);
  
};

export default UseStateArray;
