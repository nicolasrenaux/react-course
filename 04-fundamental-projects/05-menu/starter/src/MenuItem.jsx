const MenuItem = ({ id, desc, category, img, price, title }) => {
  return (
    <div className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">{price}</div>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  )
}
export default MenuItem
