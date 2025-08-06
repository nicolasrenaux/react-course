import SingleItem from "./SingleItem";

const Items = ({items, removeItem}) => {
  return (
    <div className="items">
        {items.map((item)=>{
            return(
                <SingleItem {...item} key={item.id} removeItem={removeItem}/>
            )
    })}
    </div>
  )
}
export default Items