import React from 'react';
import {Register} from '../login/register';
import {Login} from '../login/login';
import logo from '../../static/images/logo.png';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Header extends React.Component{


    state = {
        open: true,
        open1:true
    };
    
    openModal = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    };

    openModal1 = (e) => {
        e.preventDefault();
        this.setState({
            open1: !this.state.open1
        });
    };
    
    

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



