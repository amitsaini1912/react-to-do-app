import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";

    let getWeatherInfo = async () => {
        try {
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city)
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='container'>
            <h1>Weather Search App</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Search City" variant="outlined" value={city} onChange={handleChange} required /> &nbsp;
                <Button className='searchBtn' type='submit' variant="contained" size="large">Search</Button> <br /><br />
                {error && <p style={{color: "red"}}>No such city exist in API</p>}
            </form>
        </div>
    );
}