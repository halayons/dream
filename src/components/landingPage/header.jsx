import React from 'react';

import logo from '../../static/images/logo.png';
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
            <div class="jumbotron-header"> 
               <div class="row">
                   <div class="col-md-8">
                   <img src= {logo} class="img-logo" ></img>
                   </div>
                   <div class="col-md-4">
                       <button type="button" class="btn-register" onClick={this.registrarse}>Registrarse</button>
                       <button type="button" class="btn-login" onClick={this.iniciarSesion}>Iniciar Sesión</button>
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
