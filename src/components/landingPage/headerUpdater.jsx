import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import campana from "../../static/images/campana.svg"
import { Notifications } from "./notifications/notifications"
import { Register } from '../login/register';
import { Login } from '../login/login';
import Cookies from 'js-cookie';

export class HeaderUpdater extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: null,
            open: true,
            open1: true,
            notification: ''
        }
        //this.userInfo = null;
    }

    componentDidMount(e) {
        

        fetch('http://localhost:8000/users/api/auth/user/', {
            method: 'GET',
            credentials: 'include',
            headers: {
            },
        }).then((response) => response.json())
            .then(responseJson => {
               this.setState({ userInfo: responseJson })
            }).catch(error => console.error('Error:', error));
    }

    registrarse() {
        window.location.pathname = "/accounts/signup/"
    }

    iniciarSesion() {
        this.openModal();
    }

    openModal = (e) => {
        let mod = document.getElementById(e.target.value);
        mod.append("body")
        console.log(e.target.value);
    };

    putData = (e) => {
        this.setState({ notification: e });
    }
    menuSelect(e){
        e.preventDefault();
        if(e.target.value =="Salir")this.logOut(e);
        if(e.target.value =="Pasteles")window.location.pathname = "/social"
        if(e.target.value =="Perfil")window.location.pathname = "/profile"
        if(e.target.value =="Inicio")window.location.pathname = "/"
    }
    logOut(e){
        console.log("chao prra")
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
            },
            credentials: "include",
            body: JSON.stringify({
                likes:this.state.like+1
            })
        };
        fetch('http://localhost:8000/users/api/auth/logout/', requestOptions)
        .then(res => res.json())
        .then(json =>console.log(json))
        window.location.pathname = "/"
    }
    


    render() {
        // <Notification putData={this.putData}/> 
        //var user_name = this.state.userInfo.short_name;
        console.log('isNull?' + this.state.userInfo == null);
        if (this.state.userInfo == null || this.state.userInfo.hasOwnProperty('detail')) {
            return (
                <div className="col-lg-6 col-md-6 col-9 ">

                    <button type="button" className="col-lg-6 col-sm6 col-6 btn btn-register " data-toggle="modal" data-target="#register" value="register" data-backdrop="false" data-dismiss="modal" >Registrarse</button>
                    <Register />


                    <button type="button" className="col-lg-6 col-sm6 col-6 btn btn-light" data-toggle="modal" data-target="#login" value="login" data-backdrop="false" y data-dismiss="modal">Iniciar Sesión</button>
                    <Login />
                </div>

            );
        }
        else {
            return (
                
                    <div className="col-lg-6 col-sm-6 col-9 row justify-content-end f-wrap">
                        <div className="col-lg-1 col-sm-2 col-2">
                            <img type="button" className="menubtn img-fluid" src={campana} alt="notificacion" data-toggle="collapse" data-target="#notification" aria-expanded="false" aria-controls="" />
                            <div className="collapse multi-collapse   badge pop-notification" id="notification">
                                <Notifications  notifications = {this.props.notifications}></Notifications>
                            </div>
                        
                        </div>
                        <div className="col-lg-2 col-sm-4 col-4">
                            <img className="img-fluid rounded-circle" src={this.state.userInfo.foto} />
                        </div>
                        <div className="menubtn">
                            <span className=" btn badge btname-user">{this.state.userInfo.email}</span>
                            <select type="select" className=" arrow btn  badge " id="perfil" onClick={e=>this.menuSelect(e)}>
                                <option select  className="btn-dark" value=""></option>
                                <option className="btn btn-dark" value="Inicio">Inicio</option>
                                <option className="btn btn-dark" value="Perfil">Perfil</option>
                                <option className="btn btn-dark" value="Pasteles">Pasteles</option>
                                <option className="btn btn-dark" value="Salir" >Salir</option>
                            </select>
                        </div>
                        
                    </div>
                    
        
            );
        }
    }
}
export default HeaderUpdater;