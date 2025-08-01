const Categories = ({categories, filterItems}) => {
  return (
    <section className="btn-container">
        {categories.map((category)=>{
            return <button className="btn" key={category} onClick={()=>filterItems(category)}>{category}</button>
        })}
    </section>
  )
}
export default Categories