import './style.scss';
import React from 'react';

import Cookies from 'js-cookie';

export class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.setCurrent = this.setCurrent.bind(this);
		this.cerrarSesion = this.cerrarSesion.bind(this);
	}

	home() {
		window.location.pathname = "/";
	}

	setCurrent(event) {
		this.props.menu(event.target.name);
	}

	cerrarSesion() {
		const requestOptions = {
			method: 'POST',
			headers: {
				// 'Content-Type': 'application/json',
				'X-CSRFToken': Cookies.get('csrftoken')
			},
			credentials: "include",
		};
		fetch("http://localhost:8000/users/api/auth/logout/", requestOptions)
			.then(response => response.json())
			.then(json => {
				window.location.pathname = "/";
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div class="sidebar">
				<a class="active" href="/">Home</a>
				<a name='0' onClick={this.setCurrent} href="#pedidos">Pedidos</a>
				<a name='1' onClick={this.setCurrent} href="#banner">Banner</a>
				<a name='2' onClick={this.setCurrent} href="#mod">Moderadores</a>
				<a name='3' onClick={this.cerrarSesion} href="#logout">Cerrar sesión</a>
			</div>
		);
	}
}