import React from "react";
import {ReactComponent as Sun} from "../img/weather/Sun.svg";
import {ReactComponent as Cloudy} from "../img/weather/Cloudy.svg";
import {ReactComponent as Rain} from "../img/weather/Rain.svg";
import {ReactComponent as Snow} from "../img/weather/Snow.svg";
import {ReactComponent as Storm} from "../img/weather/Storm.svg";




function UpcomingDays({weatherData}) {

    if (!weatherData) {
        return null;
    }

    const {forecast} = weatherData;
    return (
        <div className={"details-wrapper"}>
            <h2 className={"h2"}>5 days forecast</h2>
            <div className={"next-days"}>
                {forecast.map(day => (
                    <Day
                        key={day.time}
                        name={day.time}
                        weatherCode={day.wmo_code}
                        status={day.wmo_code_desc}
                        temp={`${day.temperature_2m_max}ºc`}
                        nightTemp={`${day.temperature_2m_min}ºc`}
                    />
                ))}
            </div>
        </div>

    )
}


function Day({name, weatherCode, status, temp, nightTemp}) {
    let Img;
    switch (weatherCode) {
        case 0: // Clear
            Img = <Sun/>;
            break;
        case 1:// Cloudy
        case 2:
        case 3:
        case 86:
        case 45:
            Img = <Cloudy/>;
            break;
        case 61: // Rain
        case 66:
        case 51:
        case 80:
        case 55:
        case 53:
            Img = <Rain/>;
            break;
        case 63: // Storm
        case 65:
        case 95:
            Img = <Storm/>;
            break;
        case 85://Snow
        case 71:
        case 73:
            Img = <Snow/>
            break;
        default:
            Img = null;
            break;
    }


    return (
        <div className={"next-days__card day"}>
            <h3 className={"h3"}>{name}</h3>
            <div className={"img-wrapper"}>
                {Img}
            </div>
            <div className={" day__desc"}>
                <div className={"day__status"}>
                    <p>{status}</p>
                </div>
                <div className={"day__temp-wrapper"}>
                    <p>{temp}</p>
                    <p className={"day__night-temp"}>{nightTemp}</p>
                </div>
            </div>
        </div>
    )
}


export default UpcomingDays

