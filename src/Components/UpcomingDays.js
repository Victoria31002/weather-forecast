import React from "react";
import {ReactComponent as Sun} from "../img/weather/Sun.svg"
import {ReactComponent as Night} from "../img/weather/Night.svg"
import {ReactComponent as SunCloudy} from "../img/weather/SunCloudy.svg"
import {ReactComponent as Cloudy} from "../img/weather/Cloudy.svg"
import {ReactComponent as NightClouds} from "../img/weather/NightClouds.svg"

function UpcomingDays() {
    return (
        <div className={"details-wrapper"}>
            <h2 className={"h2"}>5 days forecast</h2>
            <div className={"next-days"}>
                <Day name={"Tomorrow"} Img={Sun} status={"Clear"} temp={"32ºc"} nightTemp={"26ºc"}/>
                <Day name={"Wednesday"} Img={Night} status={"Clear Night"} temp={"32ºc"} nightTemp={"26ºc"}/>
                <Day name={"Thursday"} Img={SunCloudy} status={"Clouds"} temp={"32ºc"} nightTemp={"26ºc"}/>
                <Day name={"Friday"} Img={Cloudy} status={"Cloudy"} temp={"32ºc"} nightTemp={"26ºc"}/>
                <Day name={"Saturday"} Img={NightClouds} status={"Night"} temp={"32ºc"} nightTemp={"26ºc"}/>
            </div>
        </div>

    )
}


function Day({ name, Img, status, temp, nightTemp}) {
    return (
        <div className={"next-days__card day"}>
            <h3 className={"h3"}>{name}</h3>
            <div className={"img-wrapper"}>
                <Img/>
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