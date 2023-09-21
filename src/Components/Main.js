import React from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import Today from "./Today";
import UpcomingDays from "./UpcomingDays";
import Logo from "../img/logo/Logo.svg";

function Main() {
    return (
        <div className={"weather-app"}>
            <div className={'weather-panel'}>
                <div className={"header-weather-panel"}>
                    <div className={"logo-wrapper"}>
                        <img src={Logo} alt={"logo"} className={"logo"}/>
                    </div>
                    <SearchBar/>
                </div>
                <Today/>
            </div>
            <div className={"weather-description"}>
                <WeatherDetails/>
                <UpcomingDays/>
            </div>

        </div>


    )
}

export default Main