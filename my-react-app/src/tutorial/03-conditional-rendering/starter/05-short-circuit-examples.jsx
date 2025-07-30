import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({name: 'Nico'})
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {text && (
        <div>
          <h2>Whatever Return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name = {user.name}/>}
      <h2 style={{margin: '1rem 0'}}>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'Edit' : 'Add'}</button>
      {user ? <div>
          <h4>hello user {user.name}</h4>
        </div> : <h4>Please login</h4>}
    </div>
  )
}

const SomeComponent = (props) => {
  return (
    <div>
      <h2>Whatever Return</h2>
      <h2>{props.name}</h2>
    </div>
  )
}

export default ShortCircuitExamples
