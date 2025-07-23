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
          <Book {...book} key={book.id} getBook={geetbook}/>
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

  const getSingleBook = () =>{
    props.getBook(props.id)
  }

  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2 style={inlineStyles}>{props.title}</h2>
      <h4>{props.author}</h4>
      <button onClick={() => props.getBook(props.id)}>Display Title</button>
      {/* <button onClick={getSingleBook}>Display Title</button> */}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
