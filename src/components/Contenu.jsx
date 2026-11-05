import { useContext } from "react";

import { Context } from "../context/LangContext";
import './contenu.css';
import data from '../data/data';
import cocaImg from '../assets/erza-scarlet.jpg';

export default function Contenu(){

    //Recupérer la langue
    const {lang} = useContext(Context);

    return(
        <div className="global">
            <div className="item-left">
                <h1 className="title">{data[lang].title}</h1>
                <p className="subtitle">{data[lang].txt}</p>
                <p className="text">{data[lang].ctn}</p>
                <button className="btn-content" >{data[lang].btn}</button>
            </div>

            <div className="item-right">
                <img src={cocaImg}/>
            </div>
        </div>
    )
}

