import React from 'react';
<<<<<<< HEAD
import {Register} from '../login/register';
import {Login} from '../login/login';
import logo from '../../static/images/logo.png';
=======

import logo from '../../static/images/logo3.svg';
>>>>>>> CAKE-24_CrearPedido
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
<<<<<<< HEAD
                   <div class="col-md-4">
                   
                
                <button type="button" class="btn-register" onClick={(e) => {this.openModal1(e);}}>
                    Registrarse </button>
            
                    <Register open={this.state.open1} onClose={this.openModal1} />
            
                       
                       <button type="button" class="btn-login" onClick={(e) => {this.openModal(e);}}>Iniciar Sesión</button>
                       <Login open={this.state.open} onClose={this.openModal} />
=======
                   <div className="col-md-4 ver">
                       <button type="button" className="btn-register" onClick={this.registrarse}>Registrarse</button>
                       <button type="button" className="btn-login" onClick={this.iniciarSesion}>Iniciar Sesión</button>
>>>>>>> CAKE-24_CrearPedido
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



