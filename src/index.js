import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const author = 'Mel Robbins';
const Book = () => {
  const inlineStyles = {
    color: '#617d98',
    fontSize: '1rem',
  }

  const title = 'The Let Them Theory: A Life-Changing Tool That Millions of People Cant Stop Talking About';

  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2 style={inlineStyles}>
        {title}
      </h2>
      <h4>{author}</h4>
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
