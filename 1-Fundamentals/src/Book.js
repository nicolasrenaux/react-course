const Book = (props) => {
  const inlineStyles = {
    color: '#617d98',
    fontSize: '1rem',
  }

  return (
    <article className="book">
        <div className="position-container">
            <p>#{props.index + 1}</p>
        </div>
      <img src={props.img} alt={props.title} />
      <h2 style={inlineStyles}>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

export default Book