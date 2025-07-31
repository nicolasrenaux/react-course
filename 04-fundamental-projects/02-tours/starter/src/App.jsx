import { useState, useEffect } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

    const deleTour = (id)=>{
    setTours(tours.filter((tour)=>{
      return tour.id !== id;
    }))
  }

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

  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' style={{marginTop: '2rem'}} onClick={()=>{fetchData()}}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {isLoading && <Loading />}
      {tours && <Tours tours={tours} setTours={setTours} fetchData={fetchData} deleTour={deleTour}/>}
    </main>
  )
}

export default App
