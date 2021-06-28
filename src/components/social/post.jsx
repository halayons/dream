import './style.scss';
import React from 'react';
import { Comment } from './comment';
import Cookies from 'js-cookie';
import share from '../../static/images/share.png'
import like from '../../static/images/like.png'

export class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			comments: [],
			id:this.props.post.id,
			like:this.props.post.likes,
			liked:false
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
	
	enterKey(event){
		if (event.key === "Enter") {
			this.createComment(event);
		  }
	}

	cargarComentarios(){
		fetch("http://localhost:8000/social/comments/" + this.props.post.id)
			.then(response => response.json())
			.then(json => this.setState({
				comments: json
			}))
			.catch(error => console.log(error));
	}
	sendLike(event){	
		event.preventDefault();
	
			if(this.state.liked===false){
				const requestOptions = {
					method: 'PUT',
					headers: { 
						'Content-Type': 'application/json',
						'X-CSRFToken':Cookies.get('csrftoken')
					},
					credentials: "include",
					body: JSON.stringify({
						likes:this.state.like+1
					})
				};
				fetch('http://localhost:8000/social/like/'+ this.props.post.id + "/", requestOptions)
				.then(res => res.json())
				.then(json =>this.setState({like:json.likes}))
				
				var btn = document.getElementById("likeId"+this.state.id);
				btn.style.setProperty('background','#dc3545')
				btn.style.setProperty('border-radius','50%')
				this.setState({liked:true})
			}
			
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
							<div className="row justify-content-start">
								<div className= "col-lg-4 col-sm-3 col-3" >
									<span class ="badge badge-light " type ="button" data-toggle="collapse" data-target={"#cometariosPost"+this.state.id} aria-expanded="false" aria-controls="">{this.state.comments.length} Cometarios </span> 
								</div>
								<div className= "col-lg-2 col-sm-2 col-2">
								    <span class ="badge  " type ="button" data-target="" >
										{this.state.like}
										<img className="likes" src="/static/media/like.115883dc.svg" alt="" />
									</span> 
									
								</div>
								
							</div>
			
							<div className="form-row d-flex">
									<input className=" form-control col-sm-8 col-lg-8 col-8" type="text" id="comentario"  placeholder = "Escribe un comentario" value={this.state.comentario}  name="comentario" onChange={this.onInputchange} onKeyPress={e=>this.enterKey(e)}/>
									<div className="  col-2 col-sm-2 col-lg-2">
										<img type="button" id={"likeId"+this.state.id} className="img-fluid  btn-outline-danger reacciones" src={like} alt="" onClick={e=>this.sendLike(e)}/>
									</div>
									<div className="  col-2 col-sm-2 col-lg-2">
									<img type="button" className="img-fluid btn-outline-primary reacciones" src={share} alt="" />
									</div>
									
									
								
							</div>
							
							
							<div class="row">
									<div class="collapse multi-collapse col-sm-12 " id ={"cometariosPost"+this.state.id}>
										<hr />
										{this.state.comments.map(comment => <Comment comment={comment}></Comment>)}
										
									</div>
							</div>
						</div>
						<hr />
					</div>
				
			</div>
		);
	}
}