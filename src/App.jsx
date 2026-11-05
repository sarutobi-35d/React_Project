import { useState, useCallback } from 'react'
import Composant from './components/composant';

import './App.css'

function App() {

  const [count, setCount] = useState(0);

  //Utilise useCallback pour mémoriser la fonction handleClick
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count])

  return (
    
    <>
      <p>Compteur: {count}</p>
      <Composant onClick={handleClick} label="Incrementer le compteur" />
    </>

  )
}

export default App
