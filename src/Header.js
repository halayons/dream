import React from 'react';
import './Header.css';
import logo from './logo.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Header_app extends React.Component{
    render(){
        return(
        <header>
            <div class="jumbotron-header"> 
               <div class="row">
                   <div class="col-md-8">
                   <img src= {logo} class="img-logo" ></img>
                   </div>
                   <div class="col-md-4">
                       <button type="button" class="btn-register">Registrarse</button>
                       <button type="button" class="btn-login">Iniciar Sesión</button>
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

export default Header_app;