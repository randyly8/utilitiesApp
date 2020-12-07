import React, {useState} from 'react';

function Current(props) {
    // Weather Data
    const [unit, setUnit] = useState(true)
    const myObj = props.data
    let clouds, humidity, wind_speed, wind_deg, sunset, sunrise, kelvin, ftemp, ctemp = ''
    let offset = ''
    if (myObj !== undefined) {
        clouds = myObj.clouds
        humidity = myObj.humidity
        wind_speed = myObj.wind_speed
        wind_deg = myObj.wind_deg
        sunset = myObj.sunset
        sunrise = myObj.sunrise
        kelvin = myObj.temp
        ctemp = parseFloat(kelvin) - 273.15
        ftemp = ctemp * (9/5) + 32
        offset = parseInt(props.offset)/3600
    }

    // Date and Time
    const date = new Date()
    const localOffset = date.getTimezoneOffset()/60
    const day = date.getDay()
    const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
    const minute = date.getMinutes()
    var hour = '0'
    if (offset === 0)                                   hour = date.getHours() + localOffset
    else if (Math.abs(offset) > Math.abs(localOffset))  hour = date.getHours() - (Math.abs(offset)-Math.abs(localOffset))
    else if (Math.abs(offset) < Math.abs(localOffset))  hour = date.getHours() + (offset+Math.abs(localOffset))
    else                                                hour = date.getHours()

    const timeFormat = ((hour, minute) => {
        if (hour > 12) hour -= 12 // something wrong there, does not adjust current time
        return <>
            {hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0')}
        </>
    })

    // TODO: sunrise - sunset
    const unixConverter = ((unix) => {
        const date = new Date(parseInt(unix) * 1000)

        const hour = date.toLocaleString("en-US", {hour: "numeric"})
        const minute = date.toLocaleString("en-US", {minute: "numeric"})
        return<>
            {timeFormat(hour, minute)}
        </>
    })
    
    return (
        <div>
            <div className='locationTime'>
                {props.city} {props.state} {props.country}<br />
                {daylist[day]} | {timeFormat(hour, minute)}<br />
                sunrise: {unixConverter(sunset)}<br />
                sunset: {unixConverter(sunrise)}<br />
            </div>
            <br />
            <div className='weatherData'>
                {/* insert image based on weather here */}
                tempurature: {unit ? Math.round(ftemp) + '°F': Math.round(ctemp) + '°C'}
                <button onClick={() => setUnit(true)}>°F</button>
                <button onClick={() => setUnit(false)}>°C</button><br />
                cloud: {clouds}%<br />
                humidity: {humidity}%<br />
                wind: {wind_speed} {wind_deg}°
            </div>
        </div>
    );
}

export default Current;