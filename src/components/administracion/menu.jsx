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
			<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/">Home</a>
    <a class="dropdown-item" href="#">Pedidos</a>
    <a class="dropdown-item" href="#">Banner</a>
	<a class="dropdown-item" href="#">Logout</a>
  </div>
</div>
		);
	}
}