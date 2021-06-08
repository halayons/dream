import React from "react";
import { Login, Register, ForgotPassword, ImageContainer } from "./index";
import { Button } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }


    facebook(PressEvent) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        };

        fetch('http://localhost:8000/users/api/auth/social/facebook/auth-server/', requestOptions)
            .then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
    }

    google(PressEvent) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        };

        fetch('http://localhost:8000/users/api/auth/social/google/auth-server/', requestOptions)
            .then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
    }

    render() {
        const responseFacebook = (response) => {
            console.log(response);
          }
       const componentClicked=()=>{
            alert('Evento onClick');
        }
        const responseGoogle= (response) => {
            console.log(response);
            console.log(response.profileObj);
          }
        console.log(window.location.pathname)
        return (
            <div className="loginScreen">
                <div className="imageContainer">
                </div>
                <div className="accountContainer">
                    <div className="loginSelect">
                        {window.location.pathname == "/accounts/login/" && <Login></Login>}
                        {window.location.pathname == "/accounts/signup/" && <Register></Register>}
                        {window.location.pathname == "/accounts/password/reset/" && <ForgotPassword></ForgotPassword>}
                    </div>
                    <div className="socialButtons">
                        {/* <form action="" method="post"> */}
                        <FacebookLogin
                        appId="942968703190705"
                        autoLoad
                        icon="fa-facebook" 
                        callback={responseFacebook}
                        
                        render={renderProps => (
                            <button className="facebook"  onClick={renderProps.onClick}>Facebook</button>
                          )} />
                        {/* </form>
                        <form action="" method="post"> */}
                        <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Iniciar con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                        
                        {/* </form> */}
                    </div>
                </div>
            </div>
        )
    }

}