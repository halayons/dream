import React from "react";
import { Login, Register, ForgotPassword, ImageContainer } from "./index";
import { Button } from 'react-bootstrap';


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
                        <Button className="facebook" onClick={this.facebook} tittle="Facebook">Facebook</Button>
                        {/* </form>
                        <form action="" method="post"> */}
                        <Button className="google" onClick={this.google} tittle="Google">Google</Button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        )
    }

}