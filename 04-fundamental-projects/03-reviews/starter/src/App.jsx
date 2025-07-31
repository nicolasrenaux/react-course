import { useState } from 'react'
import data from './data'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const App = () => {
  const [index, setIndex] = useState(0)

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1
    }
    return number;
  }

  const randomPerson = ()=>{
    let randomNumber = Math.floor(Math.random() * data.length)
    if (randomNumber === index ) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  const nextPerson = () => {
    setIndex((currentState) => {
      const newIndex = currentState + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((currentState) => {
      const newIndex = currentState - 1
      return checkNumber(newIndex)
    })
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '500px',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <img
        src={data[index].image}
        alt={data[index].name}
        className="img"
        style={{
          borderRadius: '50%',
          width: '300px',
          height: '300px',
          objectFit: 'cover',
          boxShadow: '10px -8px 0px blue',
        }}
      />
      <h4 className="author">{data[index].name}</h4>
      <p className="job">{data[index].job}</p>
      <p className="info">{data[index].text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <GoChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <GoChevronRight />
        </button>
      </div>
      <button className='btn btn-hipster' onClick={randomPerson}>Surprise Me</button>
    </main>
  )
}
export default App
