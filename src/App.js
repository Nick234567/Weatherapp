import React, { Component } from 'react';  
import FetchData from './components/FetchData';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


  
class App extends Component {  
  render(){
    return(
      <div className="App">
        <FetchData />
      </div>
    );
  }

}  
export default App;