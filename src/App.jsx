import { useState, useMemo } from 'react'

import './App.css'

function App() {

  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  const resultatCalcul = useMemo(() =>{
    console.log("Calcul du resultat");
    return a + b;
  }, [a, b]);

  return (
    
    <>

      <p>Résultat du calcul: {resultatCalcul}</p>
      <button onClick={() =>{setA(a + 1)}}>Incrémenter A</button>
      <button onClick={() =>{setB(b + 1)}}>Incrémenter B</button>
      
    </>

  )
}

export default App
