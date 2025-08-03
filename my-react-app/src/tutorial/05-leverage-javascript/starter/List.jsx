import { useState } from 'react'
import {people as data} from '../../../data'
import Person from './Person'

const List = () => {

  const [ people, setPeople ]  = useState(data)



  return (
    <Person people={people}/>
  )
}
export default List
