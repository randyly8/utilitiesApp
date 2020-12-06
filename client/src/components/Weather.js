import React, {useEffect} from 'react';

function Weather(props) {
    const myObj = props.data

    useEffect(() => {

    },[])

    return (
        <div>
            Weather
            {console.log(myObj)}
            <div>
                <label>Location: </label>
                <label>Coordinates: </label>
            </div>
        </div>
    );
}

export default Weather;