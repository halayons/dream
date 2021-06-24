import './style.scss';

import React from 'react';
import { Footer, Header } from '../landingPage';
import { Pedidos } from './pedidos/pedidos';
import { Menu } from './menu';

export class Admin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pedidos: [{
        idpedido: 1,
        fecha_pedido: "2021-Jun-24 ",
        foto: "http://localhost:8000/media/pedido/a_8_69UKEp6.png",
        direccion: "asdfa",
        costo: 2.0,
        aceptado: false,
        estado: 2,
        comentario: "sadfasdf",
        domiciliario: true,
        pasteles: 1,
        user: "admin@admin.com"
      },
      {
        idpedido: 2,
        fecha_pedido: "2020-Jun-24 ",
        foto: "http://localhost:8000/media/pedido/a_8_69UKEp6.png",
        direccion: "asdfa",
        costo: 2.0,
        aceptado: true,
        estado: 2,
        comentario: "sadfasdf",
        domiciliario: true,
        pasteles: 1,
        user: "admin@admin.com"
      }]
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Menu></Menu>
        <Pedidos datos={this.state.pedidos}></Pedidos>
        <Footer></Footer>
      </div>
    );
  }

}