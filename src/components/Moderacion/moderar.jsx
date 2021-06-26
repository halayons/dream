import React from "react";
import logo from '../../static/images/logo.png';
import Cookies from 'js-cookie';
export class Moderar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          status:true
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm() {
        const requestOptions = {
          method: 'PUT',
          headers: {
            // 'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
          },
          credentials: "include",
          
        };
        console.log(requestOptions)
        fetch('http://localhost:8000/social/mod_post/' + this.props.datos.id, requestOptions)
          .then(response => response.json())
          .then(json => this.setState({
            posts: json
          }))
          .catch(error => console.log(error));
      }

    render() {
        if (this.props.open) {
            return null;
        }
       
        
        return (
            <button onClick={this.onSubmitForm} >Continuar</button>
        );
    }
}