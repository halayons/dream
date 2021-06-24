import '../style.scss';
import React from 'react';
import { Estado } from './estado';
import { PedidosNav } from './pedidosNav';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import { Detallep } from './detallep';


export class Pedidos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: true
		}

		this.buttonFormatter = this.buttonFormatter.bind(this);
		this.stateFromatter = this.stateFromatter.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	buttonFormatter(cell, row){
		return (
			<div>
				<button onClick={this.openModal}>ver</button>
				<Detallep open={this.state.open} datos={row} onClose={this.openModal}/>
			</div>
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
					<TableHeaderColumn dataField='estado' dataFormat={this.stateFromatter}> 
						Estado
					</TableHeaderColumn>
				</BootstrapTable>
				
			</div>
		);
	}
}