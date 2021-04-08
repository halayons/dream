import React from "react";
import logo from './logo.svg';
import './App.css';
import { Login, Register } from "./components/login/index";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }

  componentDidMount() {
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
  }


  render() {
    const { isLogginActive } = this.state;

    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: this.state.test}}></div>
          </div>
        </div>
      </div>
    )


  }
}

export default App;
