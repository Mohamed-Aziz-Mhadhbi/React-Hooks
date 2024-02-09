

import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter +1);
  }

  return (
    <>
      <p className="read-the-docs">
        {counter}
      </p>
      <button onClick={increment}>increment</button>
    </>
  )
}

export default App
