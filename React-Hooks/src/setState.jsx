import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, SetInputValue] = useState("Hello!");

  const increment = () => {
    setCounter(counter +1);
  }

  const letOnchange = (event) => {
    const newvalue = event.target.value;
    SetInputValue(newvalue);
  }

  return (
    <>
    <div>
      <p>
        {counter}
      </p>

      <button onClick={increment}>increment</button>
      </div>
      <br>
      </br>
      <div>
      <input placeholder='Enter Something ...' onChange={letOnchange}>
      </input> {inputValue}
      </div>
      
    
    </>
  )
}

export default App
