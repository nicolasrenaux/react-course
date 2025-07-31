import { useState, useEffect } from 'react'
import Tour from './Tour'

const Tours = ({tours}) => {
     
  return(
    <section style={{display: 'grid'}}>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='title-underline'></div>
        </div>
        <div className='tours'>
            {tours.map((tour)=>{
                return <Tour {...tour} key={tour.id}/>
            })}
        </div>
    </section>

  )
}
export default Tours
