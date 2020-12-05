import React from 'react';

function Weather(props) {
    const myObj = props.data

    return (
        <div>
            Weather
            {console.log(myObj)}
            <div>
                <h3>Temperature</h3>
                {myObj}
                {/* <p>{console.log(props.data.main)}</p> */}
            </div>
        </div>
    );
}

export default Weather;