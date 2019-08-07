import React from 'react';

const form = (props) => {


    return(
        <div>
            <form onSubmit= {props.loadweather}>
                <input type = "text" name="city" placeholder ="City" />
                <input type="text" name="country" placeholder = "Country"  />
                <button>Get Weather</button>
            </form>
        </div>
    );
}

export default form ;