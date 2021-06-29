import React from "react";
import logo from './logo.svg';
import './App.css';

import { LoginScreen } from "./components/login/index";
import { LandingPage, Header, Footer } from "./components/landingPage/index";
import { Pedido } from "./components/Pedidos/Pedidos"
import { Profile } from "./components/Profile/profile";
import { Social } from "./components/social/index"
import { Admin } from "./components/administracion/admin"

import { ModPedido } from "./components/Pedidos/ModPedido";
import { Notification } from "./components/notification/notification";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: []
    }
    this.notificationMngr = this.notificationMngr.bind(this);
  }

  /*componentDidMount() {
    this.renderLogin()
  }


  renderLogin = async () => {
    try {
      let res = await fetch("http://localhost:8000/accounts/login/")
      let html = await res.text();

      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");

      this.setState({
        'test': doc.body.innerHTML
      });
    } catch (err) {
      console.log(err);
    }
  }*/

  notificationMngr(message) {
    this.setState({
      notifications: this.state.notification.push(message)
    });
  }


  render() {
    return (
      <div className="App">
        <Notification notificationManager = {this.notificationMngr}/>
        <Header notifications = {this.state.notification}></Header>
        {window.location.pathname == "/accounts/login/" && <LoginScreen></LoginScreen>}
        {window.location.pathname == "/accounts/signup/" && <LoginScreen></LoginScreen>}
        {window.location.pathname == "/accounts/password/reset/" && <LoginScreen></LoginScreen>}
        {window.location.pathname == "/crearPastel/" && <Pedido></Pedido>}
        {window.location.pathname == "/modificarPastel/" && <ModPedido></ModPedido>}
        {window.location.pathname == "/" && <LandingPage></LandingPage>}
        {window.location.pathname == "/profile" && <Profile></Profile>}
        {window.location.pathname == "/social" && <Social></Social>}
        {window.location.pathname == "/admin" && <Admin></Admin>}
        
        <Footer></Footer>
      </div>

    )
  }
}

export default App;
