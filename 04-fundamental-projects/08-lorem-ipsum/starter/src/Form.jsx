import React, { useState } from 'react'

const Form = ({count, setCount, setText, data}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let text = data.slice(0,count);
        setText(text)
    }

    const handleChange = (e) => {
        let amount = parseInt(e.target.value);
        setCount(amount);
    }

  return (
    <form className='lorem-form'>
        <label htmlFor="count">Paragraphs:</label>
        <input type="number" id='count' name="count" value={count} min={1} max={8} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit} className='btn' style={{margin: '0'}}>Generate</button>
    </form>
  )
}

export default Form