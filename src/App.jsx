import './App.css'

import {createPortal} from 'react-dom'

function App() {

  const MyPortal = ({children}) => {

    const protalRoot = document.getElementById("portal-root");

    return createPortal(children, protalRoot);
  }

  return (
    
    <>
      <div>
        <p>Contenu du composant parent</p>
        <MyPortal>
          <p>Contenu de l'enfant via le portal.</p>
        </MyPortal>
      </div>
    </>

  )
}

export default App
