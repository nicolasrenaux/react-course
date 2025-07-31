import { useState } from "react";


const Tour = (props) => {
  const { image, info, name, price, deleteTour, id } = props

  const [readMore, setReadMore] = useState(false)
  

  return (
    <article className="single-tour">
      <img src={image} alt={info} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info + ' ' : `${info.substring(0,200)}... `}
          <button type="button" className="info-btn" onClick={()=>{setReadMore(!readMore)}}>{readMore ? 'Show Less' : 'Show More'}</button>
        </p>
      </div>
      <button className="btn" style={{margin: '0 auto 1rem auto', display: 'flex', flexDirection: 'column'}} onClick={()=>{
        deleteTour(id);
      }}>Remove Tour</button>
    </article>
  )
}
export default Tour
