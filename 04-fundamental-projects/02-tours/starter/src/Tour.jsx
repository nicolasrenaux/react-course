const Tour = (props) => {
  const { image, info, name, price } = props

  console.log('Entered Here')

  return (
    <article className="single-tour">
      <img src={image} alt={info} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  )
}
export default Tour
