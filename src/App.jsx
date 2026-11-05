import ToggleLang from './components/ToggleLang';
import ContextProvider from './context/LangContext';
import Contenu from './components/Contenu';

import './App.css'

function App() {

  return (
    
    <ContextProvider>
      <ToggleLang/>
      <Contenu />
    </ContextProvider>

  )
}

export default App
