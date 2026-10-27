import './MonComposant.css'
import Bouton from '../Buttons/Button'

export default function MonComposant({item, text}){

     function handleClick(){
    console.log("Clique sur la props via une fonction reussie !");
  }

    return(

        <>
            <h1>Hello {item}</h1>
            <p>{text}</p>
            <Bouton handleClick={handleClick}/>
            
        </>
    )
}