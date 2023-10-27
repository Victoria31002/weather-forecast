import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import Today from "./Today";
import UpcomingDays from "./UpcomingDays";
import Logo from "../img/logo/Logo.svg";


//ХУКИ ВСЕ ОТ КОРКИ ДО КОРКИ

async function getCities(){
    return fetch('https://simple-weather-xrgybod3fq-ew.a.run.app/api/v1/cities')
        .then(response => response.json())//ПОВТОРИТЬ
}

function Main() {

    const [cities, setCities] = useState([''])//РАЗОБРАТЬ
   useEffect(()=> {
       getCities().then(response => {
           console.log(response)
           setCities(response.cities)//ЭТОТ МОМЕНТ РАЗОБРАТЬ ЕЩЕ РАЗ
       })
   }, [])

    return (
        <div className={"forecast"}>
            <div className={'forecast__column1 '}>
                <div className={"header"}>
                    <div className={" header__logo-wrapper"}>
                        <img src={Logo} alt={"logo"} className={" header__logo"}/>
                    </div>
                    <SearchBar cities={cities}/>
                    {/*<select>*/}
                    {/*    {cities.map(city => <option>{city}</option>)}*/}
                    {/*</select>*/}

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