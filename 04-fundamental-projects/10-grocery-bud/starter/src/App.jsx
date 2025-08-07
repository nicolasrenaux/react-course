import { useState } from "react";
import Form from "./Form";
import {nanoid} from 'nanoid'
import Items from "./Items";
import { ToastContainer, toast } from 'react-toastify';

// Long way to do the localStorage logic
const getLocalStorage = ()=>{
  let list = localStorage.getItem('list');
  if(list){
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
}

const setLocalStorage = ( items )=>{
  localStorage.setItem('list', JSON.stringify(items));
}

const App = () => {

  // Short way of doing the localStorage logic
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

  // const [items, setItems] = useState(getLocalStorage)
  const [items, setItems] = useState(defaultList);  

  const addItem = (itemName) =>{
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    
    const newItems = [...items, newItem];
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("Item added to the list");
  }

  const removeItem = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("Item removed from the list");
  }

  const editItem = (itemId) =>{
    console.log("Items: ", items);
    
    const newItems = items.map((item)=>{
      
      if(item.id === itemId){
        item.completed = !item.completed;
      }

      return item
      
    })
    setLocalStorage(newItems);
    setItems(newItems);
  }

  return (
  <main className="section-center">
    <ToastContainer position="top-right"/>
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </main>
  )
};

export default App;
