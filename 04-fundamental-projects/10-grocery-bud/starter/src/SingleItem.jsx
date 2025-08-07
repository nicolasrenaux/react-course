import { useState } from "react";

const SingleItem = (props) => {

   const {name, id, removeItem, completed, editItem } = props;

   const handleEditItem = (id)=>{
    editItem(id);
   }
    
  return (
    <div className="single-item">
        <input type="checkbox" name="completed" id="completed" checked={completed} onChange={()=>handleEditItem(id)}/>
        <p style={{textDecoration: completed && 'line-through', textTransform: "capitalize"}}>{name}</p>
        <button className="btn remove-btn" onClick={()=>removeItem(id)}>delete</button>
    </div>
  )
}
export default SingleItem