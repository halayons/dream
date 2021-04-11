import React from "react";
import logo from './logo.svg';
import './App.css';
import { LoginScreen } from "./components/login/index";


class App extends React.Component {
  constructor(props) {
    super(props);

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


  render() {
    return (
      <div className="App">
        <LoginScreen></LoginScreen>
      </div>
    )
  }
}

export default App;
