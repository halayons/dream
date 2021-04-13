import React from "react";
import { Login, Register, ForgotPassword, ImageContainer } from "./index";

export class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
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
                        <form action="" method="post">
                            <input className="facebook" type="submit" value="Facebook"></input>
                        </form>
                        <form action="" method="post">
                            <input className="google" type="submit" value="Google"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}