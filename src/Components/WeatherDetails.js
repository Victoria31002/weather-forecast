import React from "react";
import {ReactComponent as Temp} from "../img/icons/Temp.svg";
import {ReactComponent as Rain} from "../img/icons/Rain.svg";
import {ReactComponent as Wind} from "../img/icons/Wind.svg";
import {ReactComponent as Humidity} from "../img/icons/Humidity.svg";
import {ReactComponent as Sun} from "../img/icons/Sun.svg";


function WeatherDetails() {
    return (

        <div className={"details-wrapper "}>
            <div>
                <h2 className={"h2"}>Today's weather details</h2>
            </div>
            <div className={"details-list"}>
                <DetailsItem Icon={Temp} desc={"Thermal sensation"} value={"26ºc"}/>
                <hr/>
                <DetailsItem Icon={Rain} desc={"Probability of rain"} value={"0%"}/>
                <hr/>
                <DetailsItem Icon={Wind} desc={"Wind speed"} value={"8 km/h"}/>
                <hr/>
                <DetailsItem Icon={Humidity} desc={"Air humidity"} value={"40%"}/>
                <hr/>
                <DetailsItem Icon={Sun} desc={"UV Index"} value={"5"}/>
            </div>
        </div>
    )
}

function DetailsItem({Icon, desc, value}){
    return(<div className={"details-list__item "}>
        <div className={"details-list__title"}>
            <div className={"icon-wrapper"}>
                <Icon/>
            </div>

            <h3 className={"h3"}>{desc}</h3>
        </div>
        <p className={"details-list__value"}>{value}</p>
    </div>)
}

export default WeatherDetails