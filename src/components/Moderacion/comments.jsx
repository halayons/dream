import './styles.scss';
import React from 'react';
import Cookies from 'js-cookie';

export class CommentsList extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			comments: [],
		};

	}

    componentDidMount(){
        fetch("http://localhost:8000/social/comments/" + this.props.id)
            .then(response => response.json())
            .then(json => this.setState({
                comments: json
            }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>{this.state.comments.map(comment => <Comment comment={comment}></Comment>)}</div>       
        )   
    }
}

export class Comment extends React.Component {
    constructor(props){
		super(props);
		this.state = {
            status:this.props.comment.status
		}
	}

    modFunction(data) {
        console.log("entra");
        const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken')
            },
            credentials: "include",
            body:JSON.stringify(this.state)
          };
          console.log(requestOptions)
          fetch('http://localhost:8000/social/mod_com/' + this.props.comment.id, requestOptions)
            .then(response => response.json())
            .then(json => this.setState({
              status: json
            }))
            .catch(error => console.log(error));
    };

	render(){
		return  (
			<div className="row">
				<div className="col-lg-2 col-sm-2 col-2">
					<img className="img-perfil" src="http://localhost:8000/media/postImages/321_jbjNKPP.png" alt="perfil" />
				</div>
				<div className= "col-lg-6 col-sm-6 col-6">
                    
                    <div className="badge badge-light item-comments text-wrap ">
						{this.props.comment.comentario} <br />

					<div><p className="fecha">{this.props.comment.date}</p></div>
                    </div>
					
				</div>
                <div className= "col-lg-3 col-sm-3 col-3">
                    <button onClick={() => {this.modFunction(this.props.comment)}}>Borrar   </button>
                </div>
			</div>

		);
	}
}
