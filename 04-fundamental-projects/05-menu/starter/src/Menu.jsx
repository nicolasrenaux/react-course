import MenuItem from "./MenuItem";

const Menu = ({products}) => {
    
  return (
    <section className="section-center">
        {products.map((product)=>{
           return <MenuItem {...product} key={product.id}/>
        })}
    </section>
  )
}
export default Menu