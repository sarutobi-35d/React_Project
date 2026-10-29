import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [utilisateur, setUtilisateur] = useState([]);


  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUtilisateur(data))
    .catch(error => console.log("Erreur lors de la récupération vers l'API" + error));
    return()=>{
      /*NB: Toujours crée la fonction de nettoyage lorsqu'on utilise useEffect
      qui sera appelée lorsque le composant sera retiré*/
    }

  }, [])

  return (
    
    <>

      <div>

        <h2>Liste des utilisateurs</h2>

        <ul>
          {utilisateur.map(user => (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
            
          ))}
        </ul>

      </div>
      
    </>

  )
}

export default App
