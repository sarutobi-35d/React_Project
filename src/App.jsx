import MonComposant from './components/composant1/MonComposant'


import './App.css'

function App() {

  const name = "Scarlet";


 

  return (
    
    <>
      
      <MonComposant item={name} text='La props de test récupérée' />

    </>

  )
}

export default App
