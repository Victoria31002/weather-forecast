import React from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import Today from "./Today";
import UpcomingDays from "./UpcomingDays";
import Logo from "../img/logo/Logo.svg";

function Main() {

    return (
        <div className={"forecast"}>
            <div className={'forecast__column1 '}>
                <div className={"header"}>
                    <div className={" header__logo-wrapper"}>
                        <img src={Logo} alt={"logo"} className={" header__logo"}/>
                    </div>
                    <SearchBar/>
                </div>
                <Today/>
            </div>
            <div className={" forecast__column2"}>
                <WeatherDetails/>
                <UpcomingDays/>
            </div>
        </div>


    )
}

export default Main