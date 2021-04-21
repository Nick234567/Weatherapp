import React, {Component } from 'react';

 class FormData extends Component{
    
    render(){
        return(

            <div >
                <div>
                    {this.props.error? error():null}
                </div>
             <div className="header">
                <h2>Find Today's Weather Here</h2>
         </div>
              <form className="form" onSubmit={this.props.fetchApi}>  
              
              <div className="row">
                  <div className="col-md-6 ">
                         <label>Country Name </label>
                        <input
                            name= "country_name"
                            className="form-control"
                            type="text"
                            />
                      </div>
                  <div className="col-md-6">
                        <label >City Name </label>
                        <input
                            name= "city_name"
                            className="form-control"
                            type="text"

                            />

                 </div>
          
                <div className="col-md-3  ">
                    <span float="right">
                       
                    </span>
                    
                    <button className="btn btn-primary">Get Weather</button>
            
                </div>
               </div>
              </form> 
            </div>
                );
            }
        }
        function error(){
            return(
                <div className="alert-warning text-center" role="alert">
                    Please Enter City and Country
                </div>
            )
        }
        
        export default FormData;