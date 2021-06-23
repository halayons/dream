import React from "react";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import logo from '../../static/images/logo.png';

export class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username:'',
            name:'',
            email:'',
            password1:'',
            password2:'',
            message:''
            
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    }

    save(e){
        this.setState({
            message: 'Guardado correctamente'
        })
    }

    componentDidMount() {
        this.renderLogin()
        window.addEventListener('submit', this.register)
        fetch('http://localhost:8000/users/api/auth/user/', { credentials: "include" })
            .then((response) => response.json())
            .then(responseJson => { console.log(responseJson) })
            .catch(console.log)
    }


    renderLogin = async () => {
        try {
            let res = await fetch("http://localhost:8000/accounts/signup/")
            let html = await res.text();

            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");

            this.setState({
                'test': doc.body.innerHTML
            });
        } catch (err) {
            console.log(err);
        }
    }

    register = async (event) => {
        event.preventDefault();
        let email = document.getElementsByTagName('input').namedItem('email').value
        let user = document.getElementsByTagName('input').namedItem('username').value
        let pass1 = document.getElementsByTagName('input').namedItem('password1').value
        let pass2 = document.getElementsByTagName('input').namedItem('password2').value

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ "email": email, "password1": pass1, "password2": pass2 })
        };

        let response = await fetch('http://localhost:8000/users/api/auth/registration/', requestOptions)
        if (response.status === 201) {
            this.login();
        } else {
            let js = await response.json()
            if (response.status === 400) {
                console.log(js)
            } else if (response.status === 403) {
                console.log("sesion ya iniciada " + JSON.stringify(js))
            } else {
                console.log("otro error: " + JSON.stringify(js) + JSON.stringify(response))
            }
        }
    }

    login = async () => {
        let user = document.getElementsByTagName('input').namedItem('email').value
        let pass = document.getElementsByTagName('input').namedItem('password1').value

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ "email": user, "password": pass })
        };

        let response = await fetch('http://localhost:8000/users/api/auth/login/', requestOptions)
        if (response.statusText === 'OK') {
            let usr = await fetch('http://localhost:8000/users/api/auth/user/', { credentials: "include" })
            let js = await usr.json()

            console.log("usuario: " + JSON.stringify(js))
        } else {
            let js = await response.json()
            if (response.status === 400) {
                console.log("credenciales incorrectas")
            } else if (response.status === 403) {
                console.log("sesion ya iniciada " + JSON.stringify(js))
            } else {
                console.log("otro error: " + JSON.stringify(js) + JSON.stringify(response))
            }
        }
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
                        <input placeholder= "Nombre" value={this.state.name} onChange={this.onChange.bind(this)} name="name" id="name" type="text" />
                        <input placeholder= "email" value={this.state.email} onChange={this.onChange.bind(this)} name="email" id="email" type="email" />
                        <input placeholder= "Usuario" value={this.state.username} onChange={this.onChange.bind(this)} name="username" id="username" type="text" />
                        <input placeholder= "Contraseña" value={this.state.password1} onChange={this.onChange.bind(this)} name="password1" id="password1" type="password" />
                        <input placeholder= "Confirmar contraseña" value={this.state.password2} onChange={this.onChange.bind(this)} name="password2" id="password2" type="password" />
                    
                    {/*<p>{JSON.stringify(this.state)}</p>*/}
                    <button onClick={this.save.bind(this)} type="submit">Registrarse</button>
                    <spam>{this.state.message}</spam>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Iniciar con Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                        appId="942968703190705"
                        autoLoad
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