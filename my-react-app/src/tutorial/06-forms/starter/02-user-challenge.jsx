import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleAddUser = (e) => {
    e.preventDefault()
    if(!name) return;
    const id = users.length + 1
    setUsers([...users, { id: id, name: name }])
    setName('')
  }

  const handleRemoveUser = (id)=>{
    setUsers(users.filter((user)=> user.id !== id))
  }

  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block" onClick={handleAddUser}>
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div style={{display: 'flex'}} key={user.id}>
            <h2>{user.name}</h2>
            <button type='button' onClick={()=>{handleRemoveUser(user.id)}}>Remove User</button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
