import FrenchFlag from '../assets/react.svg';
import SpanishFlag from '../assets/vite.svg';
import EnglishFlag from '../assets/vite.svg';

import './toggleLang.css';
import { Context } from '../context/LangContext';
import { useContext } from 'react';

export default function ToggleLang(){

    const {toggleLang} = useContext(Context);


    return(
        <div className="box-langs">
            <img src={FrenchFlag} onClick={() => toggleLang("FR")} title='En Francais' />
            <img src={SpanishFlag} onClick={() => toggleLang("ES")} title='En Espagnol'/>
            <img src={EnglishFlag} onClick={() => toggleLang("EN")} title='En Anglais'/>
        </div>
    )
}