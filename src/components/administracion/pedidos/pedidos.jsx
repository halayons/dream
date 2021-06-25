import '../style.scss';
import React from 'react';
import { Estado } from './estado';
import { PedidosNav } from './pedidosNav';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import { Detallep } from './detallep';


export class Pedidos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: true,
			value:" "
			
		};

		this.buttonFormatter = this.buttonFormatter.bind(this);
		this.stateFromatter = this.stateFromatter.bind(this);
		this.openModal = this.openModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	  }
	
	  handleSubmit(event) {
		alert('Esta seguro?: ' + this.state.value);
		event.preventDefault();
	  }

	buttonFormatter(cell, row){
		return (
			<div>
				<button className= "ver" onClick={this.openModal}>ver</button>
				<Detallep open={this.state.open} datos={row} onClose={this.openModal}/>
			</div>
		);
	}
	
	buttonSelect(cell, row){
		
		return (
			<form onSubmit={this.handleSubmit}>
				<select  onChange={this.handleChange}>
  <option value="Aceptar">Aceptar</option>
  <option value="En proceso">En proceso</option>
  <option value="enviado">Enviado</option>
  <option value="entregado" selected>Entregado</option>
</select>
				
			</form>
		);
	}
	

	openModal = (e) => {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	};


	stateFromatter(cell, row){
		return <Estado datos = {row}></Estado>
	}

	

	render() {
		return (
			<div>
				<PedidosNav></PedidosNav>
				<BootstrapTable data={this.props.datos}>
					<TableHeaderColumn isKey dataField='idpedido'>
						ID 
					</TableHeaderColumn>
					<TableHeaderColumn dataField='fecha_pedido'>
						Fecha 
					</TableHeaderColumn>
					<TableHeaderColumn dataField='user'>
						Usuario 
					</TableHeaderColumn>
					<TableHeaderColumn dataField='button' dataFormat={this.buttonFormatter}> 
						Ver
					</TableHeaderColumn>
					<TableHeaderColumn dataField='estado' dataFormat={this.buttonSelect}> 
						Editar Estado
					</TableHeaderColumn>
					<TableHeaderColumn dataField='estado' dataFormat={this.stateFromatter}> 
						Estado
					</TableHeaderColumn>
				</BootstrapTable>
				
			</div>
		);
	}
}