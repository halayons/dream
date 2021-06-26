import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import campana from "../../static/images/campana.svg"
import arrow from "./flecha.png"
import { Notification } from "../notification/notification";
import { Register } from '../login/register';
import { Login } from '../login/login';

export class HeaderUpdater extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo: null,
            open: true,
            open1: true,
            notification:''
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
       let mod =document.getElementById(e.target.value);
       mod.append("body")
       console.log(e.target.value);
    };

    putData=(e)=>{
        this.setState({notification:e});
        return this.state;
    }
   


    render() {
        <Notification putData={this.putData}/> 
        //var user_name = this.state.userInfo.short_name;
        console.log('isNull?' + this.state.userInfo == null);
        if (this.state.userInfo == null || this.state.userInfo.hasOwnProperty('detail')) {
            return (
                <div className="col-lg-6 col-md-6 col-9 ">

                    
                    <button type="button" className="col-lg-6 col-sm6 col-6 btn btn-register " data-toggle="modal" data-target="#register" value="register" data-backdrop="false" data-dismiss="modal" >Registrarse</button>
                        <Register/>


                    <button type="button" className="col-lg-6 col-sm6 col-6 btn btn-light" data-toggle="modal" data-target="#login" value="login" data-backdrop="false" y data-dismiss="modal">Iniciar Sesión</button>
                        <Login/>
                </div>

            );
        }
        else {
            return (
                <div className="col-lg-6 col-sm-6 col-9 row justify-content-end">
                    
                    <div className="col-lg-1 col-sm-2 col-2">

                        <img type="button" onClick={this.n} className ="menubtn img-fluid" src={campana} alt="notificacion"  data-toggle="collapse" data-target="#notification" aria-expanded="false" aria-controls="" />
                           
                        <div className="row">
                            <div className="collapse multi-collapse " id ="notification">
                              {/*this.state.notification.map(n => <Comment comment={comment}></Comment>)*/}
                                <p>n1</p>
                                <p>{this.state.notification}</p>
                            </div>
					    </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                        <img  className="img-user img-fluid" src={this.state.userInfo.foto} />
                    </div>
                    <div className="menubtn col-lg-4 col-sm-6 col-6">
                        <span className=" btn badge btname-user">{this.state.userInfo.email}</span>
                       <select type="select" className=" arrow btn  badge " id="perfil">
                            <option className="btn btn-dark"value="Perfil">Perfil</option>
                            <option className="btn btn-dark" value="Pasteles">Pasteles</option>
                            <option className="btn btn-dark" value="Salir">Salir</option>
                        </select>
                    </div>

                    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
                    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
                    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

                </div>
            );
        }
    }
}
export default HeaderUpdater;