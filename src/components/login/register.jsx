import React from "react";

export class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            test: null,
        }
    }

    componentDidMount() {
        this.renderLogin()
        window.addEventListener('submit', this.register)
        fetch('http://localhost:8000/users/api/auth/user/', { credentials: "include" })
            .then((response) => response.json())
            .then(responseJson => { console.log(responseJson) })
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
        // let user = document.getElementsByTagName('input').namedItem('username').value
        let pass1 = document.getElementsByTagName('input').namedItem('password1').value
        let pass2 = document.getElementsByTagName('input').namedItem('password2').value

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ "email": email, "password": pass1, "password2": pass2 })
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
            headers: { 'Content-Type': 'application/json'},
            credentials: "include",
            body : JSON.stringify({"email" : user, "password" : pass})
       };

        let response = await fetch('http://localhost:8000/users/api/auth/login/', requestOptions)
        if (response.statusText === 'OK'){
            let usr = await fetch('http://localhost:8000/users/api/auth/user/', {credentials: "include"})
            let js = await usr.json()

            console.log("usuario: " + JSON.stringify(js))
        } else{
            let js = await response.json()
            if(response.status === 400){
                console.log("credenciales incorrectas")
            } else if(response.status === 403){
                console.log("sesion ya iniciada " + JSON.stringify(js))
            } else {
                console.log("otro error: "  + JSON.stringify(js) + JSON.stringify(response))
            }
        }    
    }


    render() {
        console.log(window.location.pathname)
        return (
            <div className="App">
                <div className="register">
                    <div className="container">
                        <div className="content" dangerouslySetInnerHTML={{ __html: this.state.test }}></div>

                    </div>
                </div>
            </div>
        )
    }
}