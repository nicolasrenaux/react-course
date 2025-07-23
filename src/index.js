import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
  author: 'Mel Robbins',
  title: 'The Let Them Theory: A Life-Changing Tool That Millions of People Cant Stop Talking About',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg',
  id: 1,
},
{
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  id: 2,
},
];

const BookList = () => {
  const someValue = 'ShakeAndBake';
  const displayValue = () =>{
    console.log(someValue);
  }

  const geetbook = (id) =>{
    const returnedBook = books.find((book) => book.id === id)
    console.log(returnedBook);
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        // const {img, author, title, id} = book;
        return (
          // <Book img = {img} author = {author} title = {title} key={id}/>
          <Book {...book} key={book.id} displayValue={displayValue} getBook={geetbook}/>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const inlineStyles = {
    color: '#617d98',
    fontSize: '1rem',
  }

  const displayTitle = () =>{
    console.log(props.title);
  }

  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2 style={inlineStyles}>{props.title}</h2>
      <h4>{props.author}</h4>
      <button onClick={props.getBook}>Display Title</button>
    </article>
  )
}
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
)

const Title = () => {
  const inlineStyles = {
    color: '#617d98',
    fontSize: '1rem',
  }
  return (
    <h2 style={inlineStyles}>
      The Let Them Theory: A Life-Changing Tool That Millions of People Can't
      Stop Talking About
    </h2>
  )
}

const Author = () => {
  return (
    <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '1rem' }}>
      Mel Robbins
    </h4>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
