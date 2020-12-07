import React, {useState, useEffect} from 'react';
import Current from '../components/weather/Current'
// import Daily from '../components/weather/Daily'
// import Hourly from '../components/weather/Hourly'
// import Minutely from '../components/weather/Minutely'

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
            <Current data={weather[0]} offset={weather[4]} city={city} state={state} country={country}/>
            {/* <Minutely data={weather[1]}/> */}
            {/* <Hourly data={weather[2]}/> */}
            {/* <Daily data={weather[3]}/> */}
            <div className='weatherSearch'>
                <label>
                    City<input id='fcity' required />
                </label><br />
                <label>
                    State<input id='fState' />
                </label><br />
                <label>
                    Country<input id='fCountry' />
                </label><br />
                <button onClick={updateLocation}>Submit</button>
            </div>
        </div>
    )
}

export default WeatherPage;