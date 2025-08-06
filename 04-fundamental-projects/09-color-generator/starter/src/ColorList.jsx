import { nanoid } from 'nanoid'
import SingleColor from './SingleColor'

const ColorList = ({colors}) => {
  return (
    <div className='colors'>
        {colors.map((color, index)=>{
            const id = nanoid();
            return(
                <SingleColor key={id} color={color} index={index} />
            )
        })}
    </div>
  )
}
export default ColorList