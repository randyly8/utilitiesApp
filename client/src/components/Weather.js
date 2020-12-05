import React from 'react';

function weather(props) {
    return (
        <div>
            Weather
            {props.data}
            {console.log(props.data)}
        </div>
    );
}

export default weather;