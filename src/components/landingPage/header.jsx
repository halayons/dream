import React from 'react';
import HeaderUpdater from './headerUpdater';
import logo from '../../static/images/logo3.svg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Header extends React.Component{

    
    render(){
            return(
            <header>
                <div className="jumbotron-header "> 
                    <div className="row justify-content-between">
                            <div className="col-lg-4 col-md-4 col-3">
                                <img src= {logo} className="img-fluid img-logo img-user" ></img>
                            </div>             
                            <HeaderUpdater  notifications = {this.props.notifications}/>                                     
                    </div>                                                  
                </div>

            </header>
            );
        }
}



