import React from "react";
import { FcConferenceCall } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";



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

  componentDidMount = async () => {
    let users = await fetch("http://localhost:8000/stats/users/");
    let interactions = await fetch("http://localhost:8000/stats/interactions/");
    let post = await fetch("http://localhost:8000/stats/posts/");

    let usersJS = await users.text();
    let interactionsJS = await interactions.text()
    let postJS = await post.text();


    console.log(usersJS)
    this.setState({
      users: usersJS,
      interactions: interactionsJS,
      post: postJS
    });
  }

  render() {
    return (
      <div className="estadisticas" >
        < div className="estadisticasUsers">
           <h1><FcConferenceCall></FcConferenceCall></h1> 
          <label>
            Tenemos {this.state.users} usuarios
          </label>
        </div>
        < div className="estadisticasPost">
          <h1><FcEditImage></FcEditImage></h1>
          <label>
            Nuestra comunidad ha creado {this.state.post} posts
          </label>
        </div>
        < div className="estadisticasInteractions">
          <h1><FcComboChart></FcComboChart></h1>
          <label>
            Hemos recibido {this.state.interactions} interacciones
          </label>
        </div>
      </div>
    );
  }
}

export default Estadisticas;