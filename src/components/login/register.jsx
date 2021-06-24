import React from "react";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import logo from '../../static/images/logo.png';

export class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(e) {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    onSubmitForm(event){
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify(this.state)
        };

        fetch('http://localhost:8000/users/api/auth/registration/', requestOptions)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.onClose(event);
        })
        .catch(error => console.log(error))    
    }

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (this.props.open) {
            return null;
        }
        const responseGoogle = (response) => {
            console.log(response);
            console.log(response.profileObj);
        }
        const responseFacebook = (response) => {
            console.log(response);
        }

        const componentClicked = () => {
            alert('Evento onClick');
        }

        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <img src={logo} class="img-logo" ></img>
                    <h1>DreamCake</h1>
                    <form>
                        {/* <input placeholder= "Nombre" value={this.state.name} onChange={this.onChange.bind(this)} name="name" id="name" type="text" /> */}
                        <input placeholder="email" value={this.state.email} onChange={this.onInputchange} name="email" id="email" type="email" />
                        {/* <input placeholder= "Usuario" value={this.state.username} onChange={this.onChange.bind(this)} name="username" id="username" type="text" /> */}
                        <input placeholder="Contraseña" value={this.state.password} onChange={this.onInputchange} name="password" id="password1" type="password" />
                        <input placeholder="Confirmar contraseña" value={this.state.password2} onChange={this.onInputchange} name="password2" id="password2" type="password" />

                        {/*<p>{JSON.stringify(this.state)}</p>*/}
                        <button onClick={this.onSubmitForm}>Registrarse</button>
                        {/* <spam>{this.state.message}</spam> */}
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Iniciar con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId="942968703190705"
                            autoLoad={false}
                            icon="fa-facebook"
                            callback={responseFacebook}

                            render={renderProps => (
                                <button className="facebook" onClick={renderProps.onClick}>Facebook</button>
                            )} />
                        <button onClick={this.onClose}>Cancelar</button>
                    </form>
                </div>
            </section>
        );
    }
}