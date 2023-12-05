import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import Today from "./Today";
import UpcomingDays from "./UpcomingDays";
import Logo from "../img/logo/Logo.svg";

async function getCities() {
    return fetch('https://simple-weather-xrgybod3fq-ew.a.run.app/api/v1/cities')
        .then(response => response.json())
        .catch((error) => {
            console.error("Ошибка при получении данных о городе: " + error);
        });
}

function Main() {
    const [cities, setCities] = useState(['']);
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCities().then(response => {
            console.log(response)
            setCities(response.cities);
            setIsLoading(false);
        })
    }, [])

    const handleCityChange = (city) => {
        if (city) {
            fetch(`https://simple-weather-xrgybod3fq-ew.a.run.app/api/v1/weather?cityName=${city}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setWeatherData(data);
                    console.log(data)
                })
                .catch((error) => {
                    console.error("Ошибка при получении данных о погоде: " + error);
                });
        }
    };

    return (
        <div className={"forecast"}>
            <div className={'forecast__column1 '}>
                <div className={"header"}>
                    <div className={" header__logo-wrapper"}>
                        <img src={Logo} alt={"logo"} className={" header__logo"}/>
                    </div>
                    <SearchBar cities={cities} onCityChange={handleCityChange} isLoading={isLoading}/>
                </div>
                <Today weatherData={weatherData}/>
            </div>
            <div className={" forecast__column2"}>
                <WeatherDetails weatherData={weatherData}/>
                <UpcomingDays weatherData={weatherData}/>
            </div>
        </div>
    )
}

export default Main