import React from 'react';
import Titles from './Components/Titles.js' ;
import Form from './Components/Form.js' ;
import Weather from './Components/Weather.js' ;
import './App.css';



class  App extends React.Component {
  
   getweather = async (event) =>{

     //console.log( event.target.elements);
     const city = event.target.elements.city.value;
     const country = event.target.elements.country.value;
     console.log(city);
     event.preventDefault() ;
    // const fetching = await fetch('http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid=eddc59533a22df8a0f007f862477e2ff');
    // const response = await fetching.json();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=eddc59533a22df8a0f007f862477e2ff`)
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                    this.setState({
                      temperature:response.main.temp,
                      city:response.name,
                      country:response.sys.country,
                      humidity: response.main.humidity,
                      description: response.weather[0].description,
                      error: ""   
                    })
                });


    // if(city&&country){

    //   this.setState({
    //     temperature:response.main.temp,
    //     city:response.name,
    //     country:response.sys.country,
    //     humidity: response.main.humidity,
    //     description: response.weather[0].description,
    //     error: "" 
    //   })
    // }
    // else{
    //   this.setState({
    //     error:"Please enter the values"
    //   })
    // }

  
}

  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }







  render() {
    return (
      <div>
        <Titles/>
        <Form loadweather = {this.getweather} />
        <Weather

          temperature={this.state.temperature }
          city = {this.state.city }
          country ={this.state.country }
          humidity ={this.state.humidity }
          description ={this.state.description }
          error ={this.state.error }

        />
      </div>

    )

    
  }
}

export default App;
