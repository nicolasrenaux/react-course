import defaultImage from '../../../assets/default-avatar.svg'

const Person = (props) => {

    const {people} = props;
    
  return (
    <div>
        {people.map((person, index)=>{
            const img = person.images?.[0]?.small?.url || defaultImage ;
            return(
                <div key={person.id}>
                    <img src={img} alt={index} style={{width: '50px'}}/>
                    <h2>{person.name}</h2>
                    <p>{person.nickname}</p>
                </div>
            )
        })}
    </div>
  )
}
export default Person