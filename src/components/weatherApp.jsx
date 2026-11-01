import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfos from "./weatherInfos";
import Loader from "./loader";


const WEATHERAPI_KEY = "469b4bf2c47d406f951101716260111";
const WEATHERAPI_URL = "http://api.weatherapi.com/v1/current.json?aqui?=no";

export default function WeatherApp(){

    const [weather, setWeather] = useState(null);

    async function loadInfo(city='london') {

        try {
            
            const request = await fetch(`${WEATHERAPI_URL}&key=${WEATHERAPI_KEY}&q=${city}`);

            const json = await request.json()

            setTimeout(()=>{
                setWeather(json)
            }, 2000);


            console.log(json); //Inspecter la réponse de l'API dans la console pour voir les données reçues


        } catch (error) {
            console.error("Erreur lors de la requete", error);
        }
        
    }

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(()=>{
        document.title = `Météo | ${weather?.location.name ?? ''}`
    }, [weather]);

    
    function handleChange(city){
        setWeather(null);
        loadInfo(city);
    }


    return(

        <>
            <div className="container">
                <WeatherForm onChangeCity={handleChange} />
                {weather ? <WeatherInfos weather={weather}/> : <Loader />}
            </div>
        </>
    )
}