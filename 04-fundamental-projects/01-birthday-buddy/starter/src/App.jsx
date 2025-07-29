import { useState } from 'react';
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data);
  

  const clearAllPeople = () => {
    setPeople([]);
  }
  
  return (
    <section className='container'>
      <h3>{people.length} Birthdays today!</h3>
      {people.map((person)=>{
        return(
          <article className='person' key={person.id}>
            <img src={person.image} alt={person.name} className='img'/>
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
              </div>
          </article>
        )
      })}
      <button className='btn btn-block' onClick={clearAllPeople}>Clear All</button>
    </section>
  );
};
export default App;
