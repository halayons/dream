import React from 'react';
import HeaderUpdater from './headerUpdater';
import logo from '../../static/images/logo3.svg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Header extends React.Component{

    
    render(){
            return(
            <header>
                <div className="jumbotron-header "> 
                    <div className="row justify-content-around">
                            <div className="col-lg-1 col-md-2 col-3 rounded">
                               <a href="./"><img src= {logo} className="img-fluid " ></img></a>
                            </div>             
                            <HeaderUpdater  notifications = {this.props.notifications}/>                                     
                    </div>                                                  
                </div>

            </header>
            );
        }
}



