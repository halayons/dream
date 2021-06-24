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
            <div class="jumbotron-header"> 
               <div class="row">
                   <div class="col-md-8">
                   <img src= {logo} class="img-logo" ></img>
                   </div>
                   <div class="col-md-4">
                   
                
                <button type="button" class="btn-register" onClick={(e) => {this.openModal1(e);}}>
                    Registrarse </button>
            
                    <Register open={this.state.open1} onClose={this.openModal1} />
            
                       
                       <button type="button" class="btn-login" onClick={(e) => {this.openModal(e);}}>Iniciar Sesión</button>
                       <Login open={this.state.open} onClose={this.openModal} />
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



