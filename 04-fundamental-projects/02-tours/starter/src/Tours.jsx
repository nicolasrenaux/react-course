import { useState, useEffect } from 'react'
import Tour from './Tour'

const Tours = ({tours, setTours, fetchData, deleTour}) => {  
     
  return(
    <section style={{display: 'grid'}}>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='title-underline'></div>
        </div>
        {tours.lenght === 0 && <button className='btn' onclick={fetchData}>Refresh</button>}
        <div className='tours'>
            {tours.map((tour)=>{
                return <Tour {...tour} key={tour.id} deleteTour={deleTour}/>
            })}
        </div>
    </section>

  )
}
export default Tours
