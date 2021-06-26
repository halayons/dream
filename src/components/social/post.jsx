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
			<div class="row justify-content-center post bg-light" >
					<div class = "card col-lg-4 col-sm-8">
						
							<p>post: {this.props.post.id}</p>
							
							<img clasName=" img-post" src = {this.props.post.foto}></img>
						<div className="card-body form">
							
							
							<div className= "comments">
								<span class ="badge badge-primary " type ="button" data-toggle="collapse" data-target="#comentarios" aria-expanded="false" aria-controls="">Cometarios </span> 
							</div>

							<div className="form-row d-flex">
									<label htmlFor="comentario">Comentar</label>
									<input className="form-control col-sm-10" type="text" id="comentario"  placeholder = "Escribe un comentario" value={this.state.comentario}  name="comentario" onChange={this.onInputchange}/>
									<spam type="button" className=" form-control btn btn-info col-sm-2 btnComentar"  onClick = {this.createComment}>✔</spam>
								
							</div>
							<hr />

							
							<div class="row">
									<div class="collapse multi-collapse col-sm-6 " id ="comentarios">
								
										{this.state.comments.map(comment => <Comment comment={comment}></Comment>)}
									</div>
								</div>
						</div>
					</div>
			</div>
		);
	}
}