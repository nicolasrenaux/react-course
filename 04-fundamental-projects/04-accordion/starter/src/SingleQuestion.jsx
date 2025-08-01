import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ id, info, title, activeId, toggleQuestion }) => {
    const isActive = id === activeId
  return (
    <article className="question" onClick={()=>{toggleQuestion(id)}}>
      <header>
        <h5>{title}</h5>
        <button className="question-btn">{isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}
export default SingleQuestion
