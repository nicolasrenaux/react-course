import { useState } from 'react'


const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'playing videogames'
  })

  const showJhon = () =>{
    // setPerson({name: 'jhon', age: 28, hobby: 'studying'})
    // setPerson('shakeAndBake');
    // setPerson({name: 'susan'});
    setPerson({...person, name: 'susan'});
  }

  const {name, age, hobby} = person;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>Enjoys: {hobby}</h1>
      <button onClick={showJhon} className='btn'>Show Jhon</button>
    </div>
  )
}

export default UseStateObject
