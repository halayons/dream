import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import arrow from "./flecha.png"

import { Register } from '../login/register';
import { Login } from '../login/login';

export class HeaderUpdater extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: null,
            open: true,
            open1: true
        }
        //this.userInfo = null;
    }
    
    componentDidMount() {
        fetch('http://localhost:8000/users/api/auth/user/', {
            method: 'GET',
            credentials: 'include',
            headers: {
            },
        }).then((response) => response.json())
            .then(responseJson => {
                console.log('Esta es la info del usuario');
                this.setState({ userInfo: responseJson })
                console.log(this.state.userInfo)
            }
            ).catch(error => console.error('Error:', error));
    }

    registrarse() {
        window.location.pathname = "/accounts/signup/"
    }

    iniciarSesion() {
        this.openModal();
    }

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


    render() {
        //var user_name = this.state.userInfo.short_name;
        console.log('isNull?' + this.state.userInfo == null);
        if (this.state.userInfo == null || this.state.userInfo.hasOwnProperty('detail')) {
            console.log('IF');
            return (
                <div className="col-md-4 ver">
                    <button type="button" className="btn-register" onClick={(e) => { this.openModal1(e); }}>Registrarse</button>
                    <Register open={this.state.open1} onClose={this.openModal1} />
                    <button type="button" className="btn-login" onClick={(e) => { this.openModal(e); }}>Iniciar Sesión</button>
                    <Login open={this.state.open} onClose={this.openModal} />
                </div>

            );
        }
        else {
            console.log('ELSE');
            return (
                <div className="user-options">
                    <div className="user-header">
                        <input type="image" className="img-user" src={this.state.userInfo.foto} />
                        <h2 className="btname-user">{this.state.userInfo.short_name}</h2>
                    </div>
                    <div className="menubtn">
                        <ul className="topnav">
                            <li><input type="image" className="arrow" src={arrow} />
                                <ul className="list">
                                    <li><a href="#">Perfil</a></li>
                                    <li><a href="#">Pasteles</a></li>
                                    <li><a href="#">Salir</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    }
}
export default HeaderUpdater;