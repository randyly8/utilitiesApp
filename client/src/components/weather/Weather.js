import React, {useState, useEffect} from 'react';

function Weather() {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")

    useEffect(() => {
        fetch(`/api/weather/${city},${state},${country}`)
            .then(res => res.json())
            .then(data => setWeather(data))
    }, [city, state, country])

    useEffect(() => {
        console.log('Weather data fetched..', weather)
    }, [weather])

    const updateLocation = () => {
        setCity("London")
        setState("")
        setCountry("")
    }

    return (
        <div>
            {/* <input onChange={updateLocation}></input> */}
            {/* <button onClick={updateLocation}></button>      */}
        </div>
    );
}

export default Weather;