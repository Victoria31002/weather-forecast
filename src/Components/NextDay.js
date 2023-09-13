import React from "react";
import SunDay from "../img/weather/SunDay.svg"
import RainNight from "../img/weather/RainNight.svg"
import ClearDay from "../img/weather/ClearDay.svg"
import FewCloudsDay from "../img/weather/FewCloudsDay.svg"
import FewCloudsNight from "../img/weather/FewCloudsNight.svg"

function NextDay() {
    return (
        <div className={"container-details font-c"} style={{marginTop: "16px"}}>
            <h2 className={"h2"} style={{paddingTop:"4px"}}>Previsão para 5 dias</h2>
            <div className={"next-days"}>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Amanhã</h3>
                    <div className={"weather-img"}>
                        <img src={SunDay}/>
                    </div>
                    <div>
                        <div className={"info"}><p>Temporal</p></div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c2"}>26ºc </p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Amanhã</h3>
                    <div className={"weather-img"}>
                        <img src={RainNight}/>
                    </div>
                    <div>
                        <div className={"info"}><p>Temporal</p></div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c2"}>26ºc </p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Amanhã</h3>
                    <div className={"weather-img"}>
                        <img src={ClearDay}/>
                    </div>
                    <div>
                        <div className={"info"}><p>Temporal</p></div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c2"}>26ºc </p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Amanhã</h3>
                    <div className={"weather-img"}>
                        <img src={FewCloudsDay}/>
                    </div>
                    <div>
                        <div className={"info"}><p>Temporal</p></div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c2"}>26ºc </p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Amanhã</h3>
                    <div className={"weather-img"}>
                        <img src={FewCloudsNight}/>
                    </div>
                    <div>
                        <div className={"info"}><p>Temporal</p></div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c2"}>26ºc </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NextDay