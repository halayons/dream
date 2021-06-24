import './style.scss';

import React from 'react';
import {Detallep} from './detallep';
import { Footer, Header } from '../landingPage';

export class Admin extends React.Component {
    state = {
        open: true,
        
    };

    openModal = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    };    

    render() {
		return (
			<div>
                <Header></Header>
                <div/>
                <div>
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Todos los pedidos <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pedidos pendientes</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Pedidos entregados</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="ver" type="submit">Buscar</button>
    </form>
  </div>
</nav>
</div>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Pedido #</th>
      <th scope="col">Nombre</th>
      <th scope="col">Ver</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>Nombre</td>
      <button class="ver" onClick={(e) => {this.openModal(e);}}>Ver</button>
      <Detallep open={this.state.open} onClose={this.openModal} />
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>2</td>
      <td>Nombre</td>
      <button class="ver">Ver</button>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>3</td>
      <td>Nombre</td>
      <button class="ver">Ver</button>
    </tr>
  </tbody>
</table>
<div/>
<Footer></Footer>
</div>
);
}

}