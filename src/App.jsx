import { useState } from 'react'
import './App.css'

//Autre moyen de créer un composant enfant... On pouvait toujours se crée un fichier
const ChildComponent = () => {

  const [hasError, setHasError] = useState(false);

  //Fonction pour déclancher deliberement une erreur
  const throwError = () => {
    setHasError(true);
  };

  if(hasError){
    throw new Error("Il y a une erreur");
  }

  return(
    <div>
      <button onClick={throwError}>Declancher une erreur</button>
      <p>Composant enfant sans erreur.</p>
    </div>
  )
}

//Element parent
const ErrorBoundary = ({children}) => {

  const [hasError, setHasError] = useState(false);

  const handleError = () =>{
    setHasError(true);
  }

  if(hasError){
    return <p>Une erreur s'est produite dans le composant enfant</p>
  }

  return(
    <div>
      <h1>Composant Parent</h1>
      <button onClick={handleError}>Déclancher l'erreur dans l'enfant</button>
    </div>
  )
}

function App() {

  

  return (
    
    <>

      <ErrorBoundary>
        <ChildComponent /> 
      </ErrorBoundary>
    </>

  )
}

export default App
