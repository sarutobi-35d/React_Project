import fstyle from './header.module.css'

import './App.css'

//import { Fragment } from 'react'



function App() {
  
  const name = "Fadil";

  const style = {
    color: 'yellow'
  }

  const bool = true;

  function handleClick(){
    console.log("Clique reussi");
  }

  const tab = [
    "HTML",
    "CSS",
    "JS",
    "React"
  ];

  return (
    
    <>

      {bool ? <h4>Le bool est true</h4> : <h4>Le bool est false</h4>}

      <h1 id='monID' className='maClasse' >Hella</h1>
      <p style={style}>{name}</p>
      <input type="text" />

      <h2 className={fstyle.header}>Module pour CSS</h2>
      <h3 style={{color: bool ? 'orange' : 'green'}}>
        Utilisation des boolean ou opérations ternaires pour le style via des conditions
      </h3>

      <button onClick={handleClick}>Cliquer ici</button>

      

    
      <ul>
        {tab.map(elt => <li key={elt}>{elt}</li> )}
      </ul>
      <p>NB: Chaque éléments retournés d'une liste doit avoir une clé</p>
      
    </>

  )
}

export default App
