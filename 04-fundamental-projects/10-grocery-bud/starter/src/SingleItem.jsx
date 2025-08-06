import { useState } from "react";

const SingleItem = (props) => {

   const {name, id, removeItem, completed } = props;

   const [isChecked, setIsChecked] = useState(completed)
    
  return (
    <div className="single-item">
        <input type="checkbox" name="completed" id="completed" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
        <p style={{textDecoration: isChecked && 'line-through', textTransform: "capitalize"}}>{name}</p>
        <button className="btn remove-btn" onClick={()=>removeItem(id)}>delete</button>
    </div>
  )
}
export default SingleItem