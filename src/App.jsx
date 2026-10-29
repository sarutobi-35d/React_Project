import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const [heure, setHeure] = useState(new Date());

  useEffect(() => {

    const intervalID = setInterval(() =>{
      
      setHeure(new Date());

    }, 1000);

    return() => {
      clearInterval(intervalID);
    }

  }, [])

  return (
    
    <>
      <h2>Heure Actuelle</h2>
      <p>{heure.toLocaleTimeString()}</p>
    </>

  )
}

export default App
