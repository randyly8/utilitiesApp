import React, {useState, useEffect} from 'react';
import Weather from '../components/Weather'

function WeatherPage() {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState("London")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")

    useEffect(() => {
        fetch(`/api/weather/${city},${state},${country}`)
            .then(res => res.json())
            .then(data => setWeather(data))
    }, [city, state, country])

    const updateLocation = () => {
        setCity(document.getElementById('fcity').value)
        setState(document.getElementById('fState').value)
        setCountry(document.getElementById('fCountry').value)
    }

    return (
        <div>
            <Weather data={weather}/>
            {/* <form onSubmit={updateLocation}> */}
                <label>
                    City<input id='fcity' required></input>
                </label>
                <label>
                    State<input id='fState'></input>
                </label>
                <label>
                    Country<input id='fCountry'></input>
                </label>
                <button onClick={updateLocation}>Submit</button>
                {/* <button type='submit'>Submit</button> */}
            {/* </form> */}
        </div>
    );
}

export default WeatherPage;