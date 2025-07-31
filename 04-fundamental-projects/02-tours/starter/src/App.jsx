import { useState, useEffect } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setTours(data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '4rem' }}>
      <h2>Our Tours</h2>
      {isLoading && <Loading />}
      {tours && <Tours tours={tours} />}
    </div>
  )
}

export default App
