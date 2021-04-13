import React from "react";
class Estadisticas extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = {users:" ", interactions:" ", post:" "}
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }
   
 componentDidMount()
{
    fetch("http://localhost:8000/stats/users/").then(res=>res.text()).
          then(res=>this.state.users=res).catch(err=>console.log(err));
    fetch("http://localhost:8000/stats/interactions/").then(res=>res.text()).
         then(res=>this.state.interactions=res).catch(err=>console.log(err));
    fetch("http://localhost:8000/stats/post/").then(res=>res.text()).
          then(res=>this.state.post=res).catch(err=>console.log(err));
}

  render() {
    return (
      <div className="estadisticas" >
        <label value={this.state.users}>
          Usuarios
        </label>
        
        
       <label value={this.state.post}>
          Post
        </label>
        
        
        <label value={this.state.interactiona}>
          Interaction
        </label>
        </div>
    );
  }
}

export default Estadisticas;