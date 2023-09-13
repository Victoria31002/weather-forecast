import React from "react";
import Sun from "../img/icons/Sun.svg"
import Rain from "../img/icons/Rain.svg"
import Humidity from "../img/icons/Humidity.svg"
import Temperature from "../img/icons/Temperature.svg"
import Wind from "../img/icons/Wind.svg"


function WeatherDetails() {
    return (

        <div className={"container-details "}>
            <div className={"header-details"}>
                <h2 className={"h2"}>Detalhes do clima hoje</h2>
            </div>
            <div className={"details-list font-c"}>
                <div className={"details-item "}>
                    <div className={"details-title"}>
                        <img src={Temperature}/>
                        <h3 className={"h3"}>Sensação térmica</h3>
                    </div>
                    <p>26ºc</p>
                </div>
                <hr/>
                <div className={"details-item "}>
                    <div className={"details-title"}>
                        <img src={Rain}/>
                        <h3 className={"h3"}>Probabilidade de chuva</h3>
                    </div>
                    <p>0%</p>
                </div>
                <hr/>
                <div className={"details-item "}>
                    <div className={"details-title"}>
                        <img src={Wind}/>
                        <h3 className={"h3"}>Velocidade do vento</h3>
                    </div>
                    <p>8 km/h</p>
                </div>
                <hr/>
                <div className={"details-item"}>
                    <div className={"details-title"}>
                        <img src={Humidity}/>
                        <h3 className={"h3"}>Umidade do ar</h3>
                    </div>
                    <p>40%</p>
                </div>
                <hr/>
                <div className={"details-item font-c"}>
                    <div className={"details-title"}>
                        <img src={Sun}/>
                        <h3 className={"h3"}>Índice UV</h3>
                    </div>
                    <p>5</p>
                </div>
            </div>
        </div>


    )

}

export default WeatherDetails