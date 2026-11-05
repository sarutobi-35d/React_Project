import { createContext, useState } from "react";

export const Context = createContext();

const multiLangs = ["EN", "FR", "ES"];

//Recup la langue du navigateur de l'utilisateur
let browserLang = navigator.language.slice(0, 2).toUpperCase();

//Verifier si la langue du navigateur est parmi la langue suportée
if(multiLangs.indexOf(browserLang) === -1){
    browserLang = "EN";
}

//Definir un composant ContextProvider
const ContextProvider = (props) => {

    const [lang, setLang] = useState(browserLang);

    //Fonction pour changer la langue
    const toggleLang = (changeLang) => {
        setLang(changeLang);
    }

    //return et fournir la valeur du contexte
    return(
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider