import React, { Component } from 'react';  
import FormData from './FormData';
import DisplayWeatherData from './DisplayWeatherData';

// import axios from 'axios';




class FetchData extends Component { 
  constructor(){
        super();
        this.state={
            city: "Kathmandu",
            country:"Nepal",
            sunrise: "6:20:40",
            sunset:"6:20:40",
             latitude: 27,
            longitude: 47,
            humidity:77,
            temp_max: 25,
            temp_min:20,
            icon: undefined,
            celsius: 20,
            description: "",
            error:false,
        };


        this.weathericon={
            Thunderstorm: "wi-thunderstorm",
            Drizzle:"wi-sleet",
            Rain: "wi-strom-showers",
            Snow:"wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
            
        };

}

    calCelsius(temp){
        let cell =Math.floor(temp-273.15);
        return cell;

    }
  
    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time =  hour + ':' + min + ':' + sec ;
        return time;

      }
   

    get_Weathericon(icon, rangeid){
        switch(true){
            case rangeid >=200 && rangeid <=232:
                this.setState({icon:this.weathericon.Thunderstorm});
                break;
            case rangeid >=300 && rangeid <=321:
                this.setState({icon:this.weathericon.Drizzle});
                break;
            case rangeid >= 500 && rangeid <=531:
                this.setState({icon: this.weathericon.Rain});
                break;
            case rangeid >= 600 && rangeid <= 622:
                this.setState({icon: this.weathericon.Snow});
                break;
                case rangeid >= 701 && rangeid <=781 :
                    this.setState({icon: this.weathericon.Atmosphere});
                    break;
                case rangeid === 800 :
                    this.setState({icon: this.weathericon.Clear});
                    break;
                case rangeid >=801 && rangeid <=804:
                    this.setState({icon: this.weathericon.Clouds});
                    break;
                    default:
                        this.setState({icon: this.weathericon.Clouds});
    
                
            }
        }


    
    componentDidMount(){
      const fetchInitialData=async()=>{
      let url= `http://api.openweathermap.org/data/2.5/weather?q=kathmandu,nepal&appid=f199dae3f6bc21c61ec0307bd639b580`
      let response = await fetch(url);   
      let resJson= await response.json();
      

      this.setState({
        city: resJson.name,
        country:resJson.sys.country,
        sunrise:this.timeConverter(resJson.sys.sunrise),
        sunset: this.timeConverter(resJson.sys.sunset),
        latitude: resJson.coord.lat,
        longitude: resJson.coord.lon,
        humidity:resJson.main.humidity,
        temp_min:this.calCelsius(resJson.main.temp_min),

        temp_max: this.calCelsius(resJson.main.temp_max),
        celsius: this.calCelsius(resJson.main.temp),
        description: resJson.weather[0].description,
        
        error:false
 
    });
         this.get_Weathericon(this.weathericon, resJson.weather[0].id)
      
    }
    fetchInitialData();
  }

       
         fetchApi =async(e)=>{
             e.preventDefault();
                let city= e.target.city_name.value;
                let country=e.target.country_name.value;
                if(city && country) {

                  let url= `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f199dae3f6bc21c61ec0307bd639b580`
              
                  let response = await fetch(url);
                  console.log(response);
                  let resJson= await response.json();
                  console.log(resJson);
                  
                  this.setState({
                      city: resJson.name,
                      country:resJson.sys.country,
                      sunrise:this.timeConverter(resJson.sys.sunrise),
                      sunset: this.timeConverter(resJson.sys.sunset),
                      latitude: resJson.coord.lat,
                      longitude: resJson.coord.lon,
                      humidity:resJson.main.humidity,
                      temp_min:this.calCelsius(resJson.main.temp_min),
          
                      temp_max: this.calCelsius(resJson.main.temp_max),
                      celsius: this.calCelsius(resJson.main.temp),
                      description: resJson.weather[0].description,
                      // value: this.state.value
                      error:false
               
                  });
                       this.get_Weathericon(this.weathericon, resJson.weather[0].id)
              
                  }else{            
                      this.setState({
                          
                          error:true
                      });
                    
                 
                   
                }
              
            }
          
            render(){
                  return(
                  <div>
                      <FormData fetchApi={this.fetchApi} error={this.state.error}/>
                      <DisplayWeatherData                      
                       city={this.state.city}
                       country={this.state.country}
              sunrise={this.state.sunrise} 
              sunset={this.state.sunset}
              lon={this.state.longitude}
              lat={this.state.latitude}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              humidity={this.state.humidity}
              celsius={this.state.celsius}
              weathericon={this.state.icon}
              description={this.state.description}
        
            />
        </div>
    );
  }
  
}

export default FetchData;