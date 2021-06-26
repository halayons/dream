import './style.scss';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import logo from '../../static/images/logo.png';

class Login extends Component {

  constructor() {
    super()

    this.state = {};

    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  onSubmitForm = async () => {
    let response = await fetch('http://localhost:8000/users/api/auth/login/', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })

    if (response.statusText === 'OK') {
      let json = await response.json();
      console.log(json);
    }
    else {
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

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

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
          <label>
            <p>Correo</p><br />
            <input name="email" type="text" value={this.state.email} onChange={this.onInputchange} />
          </label>
          <label>
            <p>Contraseña</p><br />
            <input name="password" type="password" value={this.state.password} onChange={this.onInputchange} />
          </label>
          <button onClick={this.onSubmitForm} >Continuar</button>
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
        </div>
      </section>
    );
  }
}
export { Login };