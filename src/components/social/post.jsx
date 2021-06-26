import './style.scss';
import React from 'react';
import { Comment } from './comment';
import Cookies from 'js-cookie';

export class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			comments: [],
			id:this.props.post.id
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
			this.setState({comentario:''});
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
						
						<div className="carousel slide"  id={"post"+this.state.id} data_ride="carousel">
							<div className="carousel-inner carousel-post" >
								<img className=" carousel-item active img-fluid" src = {this.props.post.foto}></img>
								<img className=" carousel-item img-fluid"  src="http://localhost:8000/media/postImages/321_jbjNKPP.png"></img>
							</div>
							
							<div class="carousel-control-next" href={"#post"+this.state.id} role="button" data-slide="next">
								<spam class="carousel-control-next-icon" arial-hidden="true"></spam>
								<spam class="sr-only">Siguiente</spam>
							</div>
							<div class="carousel-control-prev" href={"#post"+this.state.id} role="button" data-slide="prev">
								<spam class="carousel-control-prev-icon" aria-hidden="true"></spam>
								<spam class="sr-only">Anterior</spam>
							</div>
						</div>

						

						<div className="card-body ">
							<div className="row justify-content-between">
								<div className= "comments col-lg-4 col-sm-4 col-4" >
									<span class ="badge badge-light " type ="button" data-toggle="collapse" data-target={"#	cometariosPost"+this.state.id} aria-expanded="false" aria-controls="">{this.state.comments.length} Cometarios </span> 
								</div>
								<div className= "col-lg-5 col-sm-5 col-5">
								    <img className="likes" src="/static/media/like.115883dc.svg" alt="" />
									<span class ="badge badge-primary " type ="button" data-target="" >
										{this.props.post.likes}
									</span> 
									
								</div>
							</div>
			
							<div className="form-row d-flex">
									<input className="form-control col-sm-10 col-lg-10 col-10" type="text" id="comentario"  placeholder = "Escribe un comentario" value={this.state.comentario}  name="comentario" onChange={this.onInputchange}/>
									<div className=" col-sm-2 col-lg-2 col-2">
										<spam type="button" className=" form-control badge badge-light  btnComentar"  onClick = {this.createComment}>
											<div className="enviar"></div>
										</spam>
									</div>
								
							</div>
							
							
							<div class="row">

									<div class="collapse multi-collapse col-sm-6 " id ={"cometariosPost"+this.state.id}>
										{this.state.comments.map(comment => <Comment comment={comment}></Comment>)}
									</div>
							</div>
						</div>
					</div>
				
			</div>
		);
	}
}