import './style.scss';
import React from 'react';
import { Comment } from './comment';
import Cookies from 'js-cookie';

export class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			comments: []
		};

		this.onInputchange = this.onInputchange.bind(this);
        this.createComment = this.createComment.bind(this);
	}

	componentDidMount() {
		this.cargarComentarios()
	}

	onInputchange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

	createComment(event){
		event.preventDefault();

		const requestOptions = {
            method: 'POST',
            headers: { 
				'Content-Type': 'application/json',
				'X-CSRFToken':Cookies.get('csrftoken')
			},
            credentials: "include",
            body: JSON.stringify({
				comentario : this.state.comentario,
				status : true,
				post : this.props.post.id
			})
        };
		fetch('http://localhost:8000/social/create_com/', requestOptions)
        .then(res => res.json())
        .then(json => {
			this.state.comments.push(json);

            this.setState({
				comments: this.state.comments
			})
        })
        .catch(error => console.log(error))   
	}


	cargarComentarios(){
		fetch("http://localhost:8000/social/comments/" + this.props.post.id)
			.then(response => response.json())
			.then(json => this.setState({
				comments: json
			}))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div class = "post">
				<p>post: {this.props.post.id}</p>
				<div class = "foto">
					<img src = {this.props.post.foto}></img>
				</div>
				<div class = "comment-box">
					<label>{this.state.comments.length} Comentarios: </label>
					{this.state.comments.map(comment => <Comment comment={comment}></Comment>)}
				</div>
				<div>
					<input type="text" placeholder = "Escribe un comentario" value={this.state.comentario}  name="comentario" onChange={this.onInputchange}/>
					<button onClick = {this.createComment}>comentar</button>
				</div>
			</div>
		);
	}
}