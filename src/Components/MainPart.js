import React from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import Today from "./Today";
import NextDay from "./NextDay";

function MainPart() {
    return (
        <div style={{display: "flex"}}>
            <div className={'content'}>
                <SearchBar/>
                <Today/>
            </div>
            <div  style={{margin: "25px"}}>
                <WeatherDetails/>
                <NextDay/>
            </div>

        </div>


    )
}

export default MainPart