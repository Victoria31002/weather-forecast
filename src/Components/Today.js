import React from "react";
import {ReactComponent as Sun} from "../img/weather-glow/Sun.svg";
import {ReactComponent as Night} from "../img/weather-glow/Night.svg";
import {ReactComponent as CloudyDay} from "../img/weather-glow/CloudyDay.svg";
import {ReactComponent as CloudyNight} from "../img/weather-glow/CloudyNight.svg";
import {ReactComponent as RainDay} from "../img/weather-glow/RainDay.svg";
import {ReactComponent as RainNight} from "../img/weather-glow/RainNight.svg";
import {ReactComponent as SnowDay} from "../img/weather-glow/SnowDay.svg";
import {ReactComponent as StormDay} from "../img/weather-glow/StormDay.svg";
import {ReactComponent as SnowNight} from "../img/weather-glow/SnowNight.svg";
import {ReactComponent as StormNight} from "../img/weather-glow/StormNight.svg";

function Today({weatherData}) {
    if (!weatherData) {
        return null;
    }
    const {time, city, wmo_code, temperature_now, temperature_max, temperature_min, wmo_code_desc} = weatherData;
    const currentHour = parseInt(time.split('T')[1].split(':')[0], 10);
    const isDaytime = currentHour >= 6 && currentHour < 18;
    let Img;
    switch (wmo_code) {
        case 0: // Clear
            Img = isDaytime ? <Sun/> : <Night/>;
            break;
        case 1:// Cloudy
        case 2:
        case 3:
        case 86:
        case 45:
            Img = isDaytime ? <CloudyDay/> : <CloudyNight/>;
            break;
        case 61: // Rain
        case 66:
        case 51:
        case 80:
        case 55:
        case 53:
            Img = isDaytime ? <RainDay/> : <RainNight/>;
            break;
        case 63: // Storm
        case 65:
        case 95:
            Img = isDaytime ? <StormDay/> : <StormNight/>;
            break;
        case 85://Snow
        case 71:
        case 73:
            Img = isDaytime ? <SnowDay/> : <SnowNight/>;
            break;
        default:
            Img = null;
            break;
    }

    return (
        <div className={'info-today'}>
            <div className={'location'}>
                <div>
                    <h1 className={"location__address"}>{city.name}, {city.country}</h1>
                    <p className={"location-data"}>{time}</p>
                </div>
                {/*ДОБАВИТЬ*/}
                <p className={"location__time"}></p>
            </div>
            <div className={'weather-today'}>
                <div className={"weather-today__temp temp"}>

                    <p className={"temp__value"}>{temperature_now}ºc</p>

                    <div className={"temp__details"}>

                        <p className={"temp__today"}>{temperature_max}ºc / {temperature_min}ºc </p>

                        <div className={"divider"}/>

                        <p className={"temp__desc"}>{wmo_code_desc}</p>
                    </div>
                </div>

                <div className={"weather-today__img-wrapper"}>
                    {Img}
                </div>
            </div>
        </div>
    )

}

export default Today