import './style.scss';
import React from 'react';

export class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	home(){
        window.location.pathname ="/";    
    }

	render() {
		return (
			<div class="sidebar">
  <a class="active" href="/">Home</a>
  <a href="#news">Pedidos</a>
  <a href="#contact">Banner</a>
  <a href="#about">Cerrar sesión</a>
</div>
		);
	}
}