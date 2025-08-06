import { useState } from "react";
import Form from "./Form";

import data from './data'

const App = () => {

  const [ count, setCount ]= useState(1);
  const [ text, setText ] = useState('');
  
  return (
    <section className="section-center">
      <h4>Lorem Ipsum Generator</h4>
      <Form count={count} setCount={setCount} data={data} setText={setText}/>
      {text && <article className="lorem-text">
          {text.map((text, index)=>{
            return <p key={index}>{text}</p>
          })}
        </article>}
    </section>
  );
};
export default App;
