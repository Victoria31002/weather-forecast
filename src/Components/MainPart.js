import React from "react";
import SearchBar from "./SearchBar";

function MainPart() {
    return (
        <div style={{display: "flex"}}>

            <div className={'home-page content'}>
                <SearchBar/>
            </div>
            <div className={"details content"}>

            </div>
        </div>


    )
}

export default MainPart