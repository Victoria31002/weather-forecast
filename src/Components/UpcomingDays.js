import React from "react";
import Sun from "../img/weather/Sun.svg"
import Night from "../img/weather/Night.svg"
import SunCloudy from "../img/weather/SunCloudy.svg"
import Cloudy from "../img/weather/Cloudy.svg"
import NightClouds from "../img/weather/NightClouds.svg"

function UpcomingDays() {
    return (
        <div className={"container-details"}>
            <h2 className={"h2"}>5 days forecast</h2>
            <div className={"next-days"}>
                <div className={"day"}>
                    <h3 className={"h3"}>Tomorrow</h3>
                    <div className={"weather-img"}>
                        <img src={Sun} alt={"sun"}/>
                    </div>
                    <div className={"info-distance"}>
                        <div className={"info"}>
                            <p>Clear</p>
                        </div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c127"}>26ºc</p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Wednesday</h3>
                    <div className={"weather-img"}>
                        <img src={Night} alt={"night"}/>
                    </div>
                    <div className={"info-distance"}>
                        <div className={"info"}>
                            <p>Clear Night</p>
                        </div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c127"}>26ºc</p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Thursday</h3>
                    <div className={"weather-img"}>
                        <img src={SunCloudy} alt={""}/>
                    </div>
                    <div className={"info-distance"}>
                        <div className={"info"}>
                            <p> Clouds</p>
                        </div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c127"}>26ºc </p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Friday</h3>
                    <div className={"weather-img"}>
                        <img src={Cloudy} alt={""}/>
                    </div>
                    <div className={"info-distance"}>
                        <div className={"info"}>
                            <p>Сloudy</p>
                        </div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c127"}>26ºc </p>
                        </div>
                    </div>
                </div>
                <div className={"day"}>
                    <h3 className={"h3 day-title"}>Saturday</h3>
                    <div className={"weather-img"}>
                        <img src={NightClouds} alt={""}/>
                    </div>
                    <div className={"info-distance"}>
                        <div className={"info"}>
                            <p> Night</p>
                        </div>
                        <div className={"info-item"}>
                            <p>32ºc</p>
                            <p className={"font-c127"}>26ºc </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UpcomingDays