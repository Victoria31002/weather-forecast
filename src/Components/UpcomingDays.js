import React from "react";
import {ReactComponent as ClearDay} from "../img/weather/ClearDay.svg";
import {ReactComponent as CloudyDay} from "../img/weather/CloudyDay.svg";
import {ReactComponent as RainDay} from "../img/weather/RainDay.svg";
import {ReactComponent as SnowDay} from "../img/weather/SnowDay.svg";
import {ReactComponent as ThunderDay} from "../img/weather/ThunderDay.svg";
import {ReactComponent as OvercastDay} from "../img/weather/OvercastDay.svg";
import {formatDayOfWeek, formatTemperatureMinMax} from "./Utils";

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
                        time={day.time}
                        wmo_code_desc={day.wmo_code_desc}
                        status={day.wmo_code_desc}
                        temperature_2m_max={day.temperature_2m_max}
                        temperature_2m_min={day.temperature_2m_min}
                    />
                ))}
            </div>
        </div>
    )
}

function Day({time, status, wmo_code_desc, temperature_2m_min,temperature_2m_max  }) {
    function WmoCodeDesc(wmo_code_desc){
        let Img;
        switch (wmo_code_desc) {
            case "Clear":
                Img = <ClearDay/>;
                break;
            case "Cloudy":
                Img = <CloudyDay/>;
                break;
            case "Overcast":
                Img = <OvercastDay/>;
                break;
            case "Rain":
                Img = <RainDay/>;
                break;
            case "Snow":
                Img = <SnowDay/>;
                break;
            case  "Thunder":
                Img = <ThunderDay/>;
                break;
            default:
                return null;
        }
        return Img;
    }

    const weatherDescription = WmoCodeDesc(wmo_code_desc);
    const { tempMin, tempMax } = formatTemperatureMinMax(temperature_2m_min, temperature_2m_max);
    const dayOfWeek = formatDayOfWeek(time);

    return (
        <div className={"next-days__card day"}>
            <h3 className={"h3"}>{dayOfWeek}</h3>
            <div className={"img-wrapper"}>
                {weatherDescription}
            </div>
            <div className={" day__desc"}>
                <div className={"day__status"}>
                    <p>{status}</p>
                </div>
                <div className={"day__temp-wrapper"}>
                    <p>{`${tempMin}ºc`}</p>
                    <p className={"day__night-temp"}>{`${tempMax}ºc`}</p>
                </div>
            </div>
        </div>
    )
}

export default UpcomingDays

