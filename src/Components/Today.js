import React from "react";
import Icons from "../img/icons/Icons.svg"

function Today() {
    return (
        <div className={'info-today'}>
            <div className={'location'}>
                <div>
                    <h1 className={"location-address"}>Los-Angeles, California</h1>
                    <p className={"location-data"}>Monday, 15 september 2023</p>
                </div>
                <p className={"location-time"}>21:39</p>
            </div>
            <div className={'weather-today'}>
                <div className={"today-temp"}>
                   <div>
                       <p className={"temp-value"}>28ºc</p>

                       <div className={"details"}>
                           <p className={"temp-day"}>32ºc / 26ºc </p>
                           <div className={"divider"}/>
                           <p className={"description-day"}>Сloudy</p>
                       </div>
                   </div>
                </div>

               <div className={"wrapper-img"}>
                    <img src={Icons} alt={""}/>
                </div>
            </div>
        </div>
    )

}

export default Today