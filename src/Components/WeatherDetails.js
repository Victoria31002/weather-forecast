import React from "react";
import Sun from "../img/Sun.svg"
import Rain from "../img/Rain.svg"
import Humidity from "../img/Humidity.svg"
import Temperature from "../img/Temperature.svg"
import Wind from "../img/Wind.svg"


function WeatherDetails() {
    return (

        <div className={"container-details"}>
            <div className={"header-details"}>
                <p>Detalhes do clima hoje</p>
            </div>
            <div className={"details-list"}>
                <div className={"details-item font-c"}>
                    <div className={"details-title"}>
                        <img src={Temperature}/>
                        <p>Sensação térmica</p>
                    </div>
                    <p>26ºc</p>
                </div>
                <hr/>
                <div className={"details-item font-c"}>
                    <div className={"details-title"}>
                        <img src={Rain}/>
                        <p>Probabilidade de chuva</p>
                    </div>
                    <p>0%</p>
                </div>
                <hr/>
                <div className={"details-item font-c"}>
                    <div className={"details-title"}>
                        <img src={Wind}/>
                        <p>Velocidade do vento</p>
                    </div>
                    <p>8 km/h</p>
                </div>
                <hr/>
                <div className={"details-item font-c"}>
                    <div className={"details-title"}>
                        <img src={Humidity}/>
                        <p>Umidade do ar</p>
                    </div>
                    <p>40%</p>
                </div>
                <hr/>
                <div className={"details-item font-c"}>
                    <div className={"details-title"}>
                        <img src={Sun}/>
                        <p>Índice UV</p>
                    </div>
                    <p>5</p>
                </div>
            </div>
        </div>


    )

}

export default WeatherDetails