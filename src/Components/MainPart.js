import React from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import Today from "./Today";

function MainPart() {
    return (
        <div style={{display: "flex"}}>

            <div className={'content'}>
               <SearchBar/>
                <Today/>
            </div>
            <div className={"content"}>

            </div>
        </div>


    )
}

export default MainPart