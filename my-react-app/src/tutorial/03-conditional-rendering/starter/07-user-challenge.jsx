import { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null);

  return(
    <div>
      {user ? <LoggedIn name={user.name} setUser={setUser}/> : <LoggedOut setUser={setUser}/>}
    </div>
  );
};

const LoggedIn = (props) =>{
  
  return(
    <div>
      <h4>Hello there, {props.name}</h4>
      <button className="btn" onClick={() => props.setUser(null)}>Logout</button>
    </div>
  )
}

const LoggedOut = (props) =>{
  return(
    <div>
      <h4>Please Login</h4>
      <button className="btn" onClick={() => props.setUser({name: 'john'})}>Login</button>
    </div>
  )
}

export default UserChallenge;
