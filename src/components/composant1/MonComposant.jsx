import { useState } from 'react'

import './MonComposant.css'


export default function MonComposant({onStatusChange,...props}){

    const [internalState, setInternalState] = useState("State du child");

    const handleChange = () => {

        const newState = "Nouvelle état du childState";
        onStatusChange(newState);
        setInternalState(newState);
    }

    

    return(

        <>
            <p>{props.propsParent}</p>
            <p>État du composant enfant: {internalState}</p>
            <button onClick={handleChange}>Changer l'état</button>
        </>
    )
}