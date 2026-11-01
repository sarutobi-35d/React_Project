import { useState } from "react"

export default function WeatherForm({onChangeCity}){

    const [city, setCity] = useState("");

    function onChange(e){

        const value = e.target.value; //Recup valeur de l'input

        if (value !== "") {
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault(); //Changer le comportement de base d'un formulaire
        onChangeCity(city);

    }


    return <form onSubmit={handleSubmit}>

        <input type="text" onChange={onChange} />
        <button onClick={handleSubmit} type="submit">Rechercher</button>
    </form>
}