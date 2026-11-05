import { useState } from 'react'
import Button from './components/Button';

import './App.css'

function App() {

  const [count, setCount] = useState(0);  

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    
    <>
      <p>Compteur: {count}</p>
      <Button onClick={handleIncrement} label="Increment" />
      <Button onClick={handleDecrement} label="Decrement" />
    </>

  )
}

export default App
