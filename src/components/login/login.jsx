import './style.scss';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import logo from '../../static/images/logo.png';

class Login extends Component {
  onClose = (e) => {
      this.props.onClose && this.props.onClose(e);
  };
  
  render() {
      if (this.props.open) {
          return null;
      }
      const responseGoogle= (response) => {
        console.log(response);
        console.log(response.profileObj);
      }
      const responseFacebook = (response) => {
        console.log(response);
      }

      const componentClicked=()=>{
        alert('Evento onClick');
    }
  
      return (
          <section className="modal-container" id="modal">
              <div className="modal-content">
              <img src= {logo} class="img-logo" ></img>
              <h1>DreamCake</h1>
              <label>
        <p>Usuario</p><br />
        <input type="text" />
      </label>
      <label>
        <p>Contraseña</p><br />
        <input type="password" />
      </label>
      <button type="submit">Continuar</button>
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
                            <button className="facebook"  onClick={renderProps.onClick}>Facebook</button>
                          )} />
                  <button onClick={this.onClose}>Cancelar</button>
              </div>
          </section>
      );
  }
      }
export {Login};