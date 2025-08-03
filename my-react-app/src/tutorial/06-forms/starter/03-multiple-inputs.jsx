import { useState } from "react";

const MultipleInputs = () => {

  const [ user , setUser ]= useState({
    name:'',
    email: '', 
    password:''
  })

  const handleChange = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    event.preventDefault();
    const {name, email, password } = user;
    if(!name || !email || !password) return;
    console.log(user);
    setUser({name: '', email:'', password: ''})
  }
  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name="name" value={user.name} onChange={handleChange}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name="email" value={user.email} onChange={handleChange}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" value={user.password} onChange={handleChange}/>
        </div>

        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
