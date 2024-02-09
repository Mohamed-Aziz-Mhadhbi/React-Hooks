import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, SetInputValue] = userState("Hello!");

  const increment = () => {
    setCounter(counter +1);
  }

  const letOnchange = (event) => {
    const value = event.target.value;
    SetInputValue(value);
  }

  return (
    <>
      <p className="read-the-docs">
        {counter}
      </p>

      <button onClick={increment}>increment</button>

      <input placeholder='Enter Something ...' onChange={letOnchange}>{inputValue}
      </input>
    </>
  )
}

export default App
