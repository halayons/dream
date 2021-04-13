import React from "react";
import "./style.scss";
class Estadisticas extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = { users: " ", interactions: " ", post: " " }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

   componentDidMount = async() => {
    let users = await fetch("http://localhost:8000/stats/users/");
    let interactions = await fetch("http://localhost:8000/stats/interactions/");
    let post = await fetch("http://localhost:8000/stats/posts/");

    let usersJS = await users.text();
    let interactionsJS = await interactions.text()
    let postJS = await post.text();


    console.log(usersJS)
    this.setState({
      users : usersJS,
      interactions : interactionsJS,
      post : postJS
    });
  } 

  render() {
    return (
      <div className="estadisticas" >
        <div className="izq">
        <h1><label >
          {this.state.users} 
          users
        </label></h1>
        </div>

         <div className="cent">
        <h1><label>
          {this.state.post} 
          post
        </label></h1>
        </div>

        <div className="der">
        <h1><label>
           {this.state.interactions} 
          interactions
        </label></h1>
        </div>
      </div>
    );
  }
}

export default Estadisticas;