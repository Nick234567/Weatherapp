import React, { Component } from 'react';  


class DisplayWeatherData extends Component {  
  render(){

    return(
      <div  className="AppData">
          <div className="cards">
            <h1 style={{fontSize:50}}>{this.props.city}, {this.props.country}</h1>
            <h1 className="py-4">
                <i className={`wi ${this.props.weathericon} display-1`}></i>
           </h1>
           <h3 className="py-3">{this.props.description}</h3>

            <h1 className="cell" style={{fontSize:60}}className="py-2  text-lg-center">{this.props.celsius}&deg;C</h1>
            </div>
        <div  className="row">
            <div className=" tempmin_max col-sm">
                <h3>Minimum Tempreture</h3>
                <h3> {this.props.temp_min}&deg;C </h3>
            </div>
            <div className="tempmin_max col-sm">
            <h3 >Maximum Tempreture {this.props.temp_max}&deg;C</h3>
            </div>
            <div className="humidity col-sm">
            <h3 >Humidity </h3>
            <h3>{this.props.humidity}</h3>
            </div>
            <div className="latitude col-sm">
            <h3 >Latitude {this.props.lat}</h3>
            </div>
            <div className="longitude col-sm">
            <h3 >Longitude {this.props.lon}</h3>
            </div>
            <div className="srise col-sm">
            <h3 >Sunrise </h3>
            <h3>{this.props.sunrise} AM</h3>
            </div>
            <div className="sset col-sm">
            <h3 >Sunset</h3>
            <h3>{this.props.sunset} PM</h3>
            </div>
          
          </div>
         
         
        </div>
      );
    }
    
      
  }  
  export default DisplayWeatherData;