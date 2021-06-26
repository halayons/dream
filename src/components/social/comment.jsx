import './style.scss';
import React from 'react';

export class Comment extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data:this.props.comment,
		}
	}
	

	render(){
		return  (
			<div>
				<br />
				<div class = "badge badge-light col-sm-8 ">
					<span><b>{this.state.data.usuario}: </b></span>
					<span>{this.state.data.comentario}</span>
					<br />
					<p className="fecha">{this.state.data.fecha}</p>
				</div>
			</div>

		);
	}
}