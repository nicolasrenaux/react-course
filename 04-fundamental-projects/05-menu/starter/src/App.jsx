import { useState } from 'react';
import data from './data'
import Title from './Title';
import Menu from './Menu';
import Categories from './Categories';



const App = () => {
  const [products, setProducts] = useState(data)
  
  const categoryArray = new Set(data.map((data)=>{return data.category}));
  const allCategories = ['all', ...categoryArray];

  const [ categories, setCategories] = useState(allCategories);
  console.log(allCategories);

  const filterItems = (category) => {
    const newItems = data.filter((data)=>{return data.category === category})

    if(category !== 'all'){
      setProducts(newItems);
    } else {
      setProducts(data);
    }
  }
  
  
  return (
    <main>
      <Title />
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu products={products}/>
    </main>
  );
};
export default App;
