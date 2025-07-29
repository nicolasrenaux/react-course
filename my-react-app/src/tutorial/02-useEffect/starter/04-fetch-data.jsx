const url = 'https://api.github.com/users'
import { useState, useEffect } from 'react'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) {
          const msg = `There was an error: ${res.status} ${res.statusText}`
          throw new Error(msg)
        }
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {users.map((user) => {
        const { id, login, avatar_url, url } = user
        return (
          <div key={id}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            <p>{url}</p>
          </div>
        )
      })}
    </div>
  )
}
export default FetchData
