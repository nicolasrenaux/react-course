import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName ] = useState('')
  const [email, setEmail ] = useState('')

  const handleChange = (e) =>{
    setName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Hello world :D");
  }

  return(
    <form className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" className="form-input" value={name} onChange={handleChange}/>
      </div>
      
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-block" onClick={handleSubmit}>Submit</button>
    </form>
  );
};
export default ControlledInputs;
