import React from "react";
import Cookies from 'js-cookie';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            test : null,
        }
    }

    componentDidMount() {
        this.renderLogin()
        window.addEventListener('submit', this.login)
    }


    renderLogin = async () => {
        try {
            let res = await fetch("http://localhost:8000/accounts/login/")
            let html = await res.text();

            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            Cookies.set('csrftoken', doc.getElementsByTagName('input').namedItem('csrfmiddlewaretoken').value)
            doc.getElementsByTagName('input').namedItem('login').setAttribute('name', 'username')
            doc.getElementsByTagName('input').namedItem('username').setAttribute('ref', this.input)
            // doc.getElementsByTagName('form')[0].addEventListener('submit', this.handleSubmit)

            this.setState({
                test : doc.body.innerHTML,
            });
        } catch (err) {
            console.log(err);
        }
    }

    login = async (event) => {
        event.preventDefault();
        let user = document.getElementsByTagName('input').namedItem('username').value
        let pass = document.getElementsByTagName('input').namedItem('password').value

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: "include",
            body : JSON.stringify({"username" : user, "password" : pass})
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
        return (
            <div className="App">
                <div className="login">
                    <div className="container">
                        <div className="content" dangerouslySetInnerHTML={{ __html: this.state.test }}></div>
                    </div>
                </div>
            </div>
        )
    }
}
