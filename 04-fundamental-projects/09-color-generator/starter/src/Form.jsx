import { useState } from "react"

const Form = ({addColor}) => {

  const [color, setColor]  = useState('#7f6bf1');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  }

  return (
    <div className="container">
        <form className="color-form">
            <input type="color" name="color" id="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
            <input type="text" name="text" id="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f15025"/>
            <button className="btn" style={{background: color}} onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
export default Form