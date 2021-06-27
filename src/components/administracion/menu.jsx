import './style.scss';
import React from 'react';

export class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.setCurrent = this.setCurrent.bind(this);
	}

	home() {
		window.location.pathname = "/";
	}

	setCurrent(event){
		this.props.menu(event.target.name);
	}

	render() {
		return (
			<div class="sidebar">
				<a class="active" href="/">Home</a>
				<a name = '0' onClick = {this.setCurrent} href="#pedidos">Pedidos</a>
				<a name = '1' onClick = {this.setCurrent} href="#banner">Banner</a>
				<a name = '2' onClick = {this.setCurrent} href="#mod">Moderadores</a>
				<a name = '3' onClick = {this.setCurrent} href="#logout">Cerrar sesión</a>
			</div>
		);
	}
}