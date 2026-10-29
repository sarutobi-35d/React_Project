import { useState } from 'react'

import MonComposant from './components/composant1/MonComposant';

import './App.css'

function App() {

  const [state, setState] = useState(0);
  const [input, setInput] = useState("");

  const [item, setItem] = useState({
    name: "JoJo",
    age: 19
  });

  const [checked, setChecked] = useState(false);

  const toggle = ()=>{
    setChecked(!checked);
  }

  function incr(){
    setState(state + 1);
  }

  function decr(){
    setState(state - 1);
  }

  function handleChange(e){

    const value = e.target.value;
    console.log(value);

    setInput(value);
    
  }

  function handleCheck(){

    setItem({...item, age: item.age + 1});

  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(new FormData(e.target()));
    
  }


  return (
    
    <>

      {state}

      <MonComposant state={state}/>

      <br />
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>

      <br /><br />
      <input type="text" value={input} onInput={handleChange}/>

      <br /><br />
      <p>{item.name}: {item.age}</p>
      <button onClick={handleCheck}>Changer age + 1</button>      
      <br /><br />

      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue="Valeur par defaut" />
        <input type="checkbox" checked={checked} onChange={toggle}/>
        {/*<button disabled={!checked}>Envoyer</button>*/}

        {checked && <button>Envoyer</button>}
        
      </form>
    </>

  )
}

export default App
