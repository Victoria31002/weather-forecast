import React from "react";
import Icons from "../img/icons/Icons.svg"

function Today() {
    return (
        <div className={'info-today'}>
            <div className={'location'}>
                <div>
                    <h1 className={"location__address"}>Los-Angeles, California</h1>
                    <p className={"location-data"}>Monday, 15 september 2023</p>
                </div>
                <p className={"location__time"}>21:39</p>
            </div>
            <div className={'weather-today'}>
                <div className={"weather-today__temp temp"}>
                    
                       <p className={"temp__value"}>28ºc</p>

                       <div className={"temp__details"}>

                           <p className={"temp__today"}>32ºc / 26ºc </p>

                           <div className={"divider"}/>

                           <p className={"temp__desc"}>Cloudy</p>
                       </div>
                </div>

               <div className={"weather-today__img-wrapper"}>
                    <img src={Icons} alt={"weather-today"}/>
                </div>
            </div>
        </div>
    )

}

export default Today