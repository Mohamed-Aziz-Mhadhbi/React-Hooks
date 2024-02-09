import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, SetInputValue] = useState("Hello!");

  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState(true);

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
      <br>
      </br>
      <div>
        <p>{count}</p>
        <button onClick={()=>{
          setCount(count + 1);
          setTextValue(!textValue);
        }}>Click Here</button>
        <p>
          {textValue && <p>This is text</p>}
        </p>
      </div>
    
    </>
  )
}

export default App
