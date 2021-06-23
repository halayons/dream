import React from 'react';
import HeaderUpdater from './headerUpdater';
import logo from '../../static/images/logo3.svg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Header extends React.Component{

    
    render(){
            return(
            <header>
                <div className="jumbotron-header"> 
                <div className="row">
                        <div className="col-md-8">
                        <img src= {logo} className="img-logo" ></img>
                        </div>             
                        <HeaderUpdater/>                                     
                </div>                                                  
            </div>
            <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
            <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
            <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

            </header>
            );
        }
}
