import React from 'react';

export const ResultatMeteo = (props) => {
    // const style = {
    //     card: {
    //         width: "40vw",
    //         borderRadius: '2em',
    //         backgroundColor: "#2a5f7e",
    //         boxShadow: "20px 20px 60px #24516b, -20px -20px 60px #306d91",
    //         padding: "2em"
    //     },
    //     cardHeader: {

    //     },
    //     cardBody: {

    //     },
    //     flex: {
    //         display: "flex",
    //         justifyContent: "space-around",
    //         alignItems: " baseline"
    //     }
    // }
    return (
        <div>
            <h2>{props.resultat.name}</h2>
            <div>
                <div>
                    {props.resultat.weather[0].description} <img src={`https://openweathermap.org/img/wn/${props.resultat.weather[0].icon}@2x.png`} alt={props.resultat.weather[0].description}></img>
                </div>
                <div>
                    Température: {props.resultat.main.temp}°C
                </div>
            </div>
            <hr />
            <div>
                <p>Ressenti: {props.resultat.main.feels_like}°C</p>
                <p>Min: {props.resultat.main.temp_min}°C</p>
                <p>Max: {props.resultat.main.temp_max}°C</p>
                <p>Humidité : <progress value={props.resultat.main.humidity} max="100">{props.resultat.main.humidity}</progress> {props.resultat.main.humidity}%</p>
                <p>Pression: {props.resultat.main.pressure}hPa</p>
            </div>
        </div>
    )
}