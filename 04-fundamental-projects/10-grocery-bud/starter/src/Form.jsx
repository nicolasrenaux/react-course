import { useState } from "react"

const Form = ({addItem}) => {
    
    const [newItemName, setNewItemName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItemName) return;
        addItem(newItemName);
        setNewItemName('');
    }

  return (
    <div>
      <form>
        <h4>Grocery Bud</h4>
        <div  className="form-control">
        <input type="text" className="form-input" value={newItemName} onChange={(e)=>setNewItemName(e.target.value)}/>
        <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Form
