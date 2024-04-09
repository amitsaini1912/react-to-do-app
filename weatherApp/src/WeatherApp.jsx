import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        humidity: 11.23,
        temp: 11.73,
        tempMax: 12.05,
        tempMin: 11.73,
        weather: "mist",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}