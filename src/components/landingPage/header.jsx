import React from 'react';

import logo from '../../static/images/logo3.svg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Header extends React.Component{


    registrarse(){
        window.location.pathname = "/accounts/signup/"
    }

    iniciarSesion(){
        window.location.pathname = "/accounts/login/"

    }

    render(){
        return(
        <header>
            <div className="jumbotron-header"> 
               <div className="row">
                   <div className="col-md-8">
                        <a href="/" className="navbar-brand">
                            <img src= {logo} className="img-logo" ></img>
                        </a>
                   </div>
                   <div className="col-md-4 ver">
                       <button type="button" className="btn-register" onClick={this.registrarse}>Registrarse</button>
                       <button type="button" className="btn-login" onClick={this.iniciarSesion}>Iniciar Sesión</button>
                   </div>

               </div>
           </div>
           <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
            <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
            <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

        </header>

        )
    }
}
