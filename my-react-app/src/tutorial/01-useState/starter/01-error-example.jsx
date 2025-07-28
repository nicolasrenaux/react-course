const ErrorExample = () => {
  let count = 0
  const visorCount = document.getElementById('countVisor')

  const handleIncrease = () => {
    console.log(count)
    count++;
  }


  return (
    <div>
      <button onClick={handleIncrease}>Click me to increase</button>
      <h2 id="countVisor">{count}</h2>
    </div>
  )
}

export default ErrorExample
