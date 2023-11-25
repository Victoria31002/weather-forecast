import React from "react";
import {ReactComponent as ClearDay} from "../img/weather-today/ClearDay.svg";
import {ReactComponent as ClearNight} from "../img/weather-today/ClearNight.svg";
import {ReactComponent as CloudyDay} from "../img/weather-today/CloudyDay.svg";
import {ReactComponent as CloudyNight} from "../img/weather-today/CloudyNight.svg";
import {ReactComponent as RainDay} from "../img/weather-today/RainDay.svg";
import {ReactComponent as RainNight} from "../img/weather-today/RainNight.svg";
import {ReactComponent as SnowDay} from "../img/weather-today/SnowDay.svg";
import {ReactComponent as SnowNight} from "../img/weather-today/SnowNight.svg";
import {ReactComponent as ThunderDay} from "../img/weather-today/ThunderDay.svg";
import {ReactComponent as ThunderNight} from "../img/weather-today/ThunderNight.svg";
import {ReactComponent as OvercastDay} from "../img/weather-today/OvercastDay.svg";
import {ReactComponent as OvercastNight} from "../img/weather-today/OvercastNight.svg";
import bgClearDay from "../img/background/bgClearDay.jpg";
import bgClearNight from "../img/background/bgClearNight.jpg";
import bgCloudyDay from "../img/background/bgCloudyDay.jpg";
import bgCloudyNight from "../img/background/bgCloudyNight.jpg";
import bgRainDay from "../img/background/bgRainDay.jpg";
import bgRainNight from "../img/background/bgRainNight.jpg";
import bgSnowDay from "../img/background/bgSnowDay.jpg";
import bgSnowNight from "../img/background/bgSnowNight.jpg";
import bgThunderDay from "../img/background/bgThunderDay.jpg";
import bgThunderNight from "../img/background/bgThunderNight.jpg";
import bgOvercastDay from "../img/background/bgOvercastDay.jpg";
import bgOvercastNight from "../img/background/bgOvercastNight.jpg";
import {format} from "date-fns/fp";

function Today({weatherData}) {
    if (!weatherData) {
        return null;
    }
    const {time, city, temperature_now, temperature_max, temperature_min, wmo_code_desc} = weatherData;

    const currentHour = parseInt(time.split('T')[1].split(':')[0], 10);
    const isDaytime = currentHour >= 6 && currentHour < 18;

    function WMOCodeToDescription(wmo_code_desc) {
        let Img;
        switch (wmo_code_desc) {
            case "Clear":
                Img = isDaytime ? <ClearDay/> : <ClearNight/>;
                break;
            case "Cloudy":
                Img = isDaytime ? <CloudyDay/> : <CloudyNight/>;
                break;
            case "Overcast":
                Img = isDaytime ? <OvercastDay/> : <OvercastNight/>;
                break;
            case "Rain":
                Img = isDaytime ? <RainDay/> : <RainNight/>;
                break;
            case "Snow":
                Img = isDaytime ? <SnowDay/> : <SnowNight/>;
                break;
            case  "Thunder":
                Img = isDaytime ? <ThunderDay/> : <ThunderNight/>;
                break;
            default:
                return null;
        }
        return Img;
    }

    function Background(wmo_code_desc) {
        let ImgBack;
        switch (wmo_code_desc) {
            case "Clear":
                ImgBack = isDaytime ? bgClearDay : bgClearNight;
                break;
            case "Cloudy":
                ImgBack = isDaytime ? bgCloudyDay : bgCloudyNight;
                break;
            case "Overcast":
                ImgBack = isDaytime ? bgOvercastDay : bgOvercastNight;
                break;
            case "Rain":
                ImgBack = isDaytime ? bgRainDay : bgRainNight;
                break;
            case "Snow":
                ImgBack = isDaytime ? bgSnowDay : bgSnowNight;
                break;
            case  "Thunder":
                ImgBack = isDaytime ? bgThunderDay : bgThunderNight;
                break;
            default:
                return null;
        }
        return ImgBack;
    }

    const background_today = Background(wmo_code_desc)
    const weatherDescription = WMOCodeToDescription(wmo_code_desc);
    const formattedData = format("EEEE, dd MMMM yyyy ", new Date(time));
    const currentTime = format("HH:mm", new Date(time));
    const temp_now = Math.floor(temperature_now);
    const temp_max = Math.floor(temperature_max);
    const temp_min = Math.floor(temperature_min);




return (
    <div className={'info-today'} style={{backgroundImage: `url(${background_today})`}}>
        <div className={'location'}>
            <div>
                <h1 className={"location__address"}> {LocationAddress(city)}</h1>
                <p className={"location-data"}>{formattedData}</p>
            </div>

            <p className={"location__time"}>{currentTime}</p>
        </div>
        <div className={'weather-today'}>
            <div className={"weather-today__temp temp"}>

                <p className={"temp__value"}>{temp_now}ºc</p>

                <div className={"temp__details"}>

                    <p className={"temp__today"}>{temp_max}ºc / {temp_min}ºc </p>

                    <div className={"divider"}/>

                    <p className={"temp__desc"}>{wmo_code_desc}</p>
                </div>
            </div>

            <div className={"weather-today__img-wrapper"}>
                {weatherDescription}
            </div>
        </div>
    </div>
)

}

function LocationAddress(city) {
    if (!city || !city.name || !city.country) {
        return null;
    }
    return (
        <h1 className={"location__address"}>{city.name}{city.name && city.country ? `, ${city.country}` : ''}</h1>
    );
}

export default Today


