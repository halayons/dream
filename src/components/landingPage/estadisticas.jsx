import React from "react";

export class Estadisticas extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = { users: "test", interactions: "test1", post: "test2" }
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
        <label>
          {this.state.users}
        </label>


        <label>
          {this.state.post}
        </label>


        <label>
          {this.state.interactions}
        </label>
      </div>
    );
  }
}

export default Estadisticas;