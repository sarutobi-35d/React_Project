import { useState } from 'react'
import MonComposant from './components/composant1/MonComposant'

import './App.css'

function App() {

  const [state, setState] = useState("Props depuis le composant parent");

  const [childrenState, setChildrenState] = useState(null);

  const handleChange = (newState) => {
    setChildrenState(newState);
  }

  return (
    
    <>
      <MonComposant propsParent={state} onStatusChange={handleChange}/>

      <p>État du composant enfant {childrenState}</p>
    </>

  )
}

export default App
