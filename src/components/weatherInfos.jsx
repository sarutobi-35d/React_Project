export default function WeatherInfos ({weather}){

    return(

        <>
            <div className="card-infos">
                <div className="card-name">
                    <h3>{weather?.location.name}</h3>
                </div>

                <div className="card-country">
                    <h4>{weather?.location.country}</h4>
                </div>

                <div className="card-boxs">
                    <div className="icon">
                        <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} />
                    </div>

                    <div className="card-temp">
                        <h5>Température (c°)</h5>
                        <p>{weather?.current.condition.text}</p>
                        <span>{weather?.current?.temp_c}°c</span>
                    </div>
                </div>

                <div className="card-map">
                    {/* Google map a été utilisé pour intégrer cette carte ensuite j'ai customisé l'URL
                        src={
                        `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.
                        58519490308!2d${weather?.location.lon}9!3d${weather?.location.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                        1!3m3!1m2!1sen!2scm!4v1793532537930!5m2!1sen!2scm`
                    }
                    */}
                    <iframe 
                        src={`https://maps.google.com/maps?q=${weather?.location.lat},${weather?.location.lon}&z=12&output=embed`}
                        width="400" 
                        height="450"
                        loading="lazy" 
                        referrerpolicy="strict-origin-when-cross-origin">
                    </iframe>
                </div>

            </div>
        </>
    )
}