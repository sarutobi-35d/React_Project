import './button.css'


export default function Bouton({handleClick}){

    return(

        <>
            <button onClick={handleClick}>
                Bouton du composant Buttons
            </button>
        </>

    )
}