import '../style.scss';
import React from 'react';
import { Estado } from './estado';
import { PedidosNav } from './pedidosNav';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Detallep } from './detallep';


export class Pedidos extends React.Component {
	acct = {
		0: false,
		1: true,
	};

	constructor(props) {
		super(props);
		this.state = {
			open: true,
			sortName: undefined,
			sortOrder: undefined
		}

		this.buttonFormatter = this.buttonFormatter.bind(this);
		this.stateFromatter = this.stateFromatter.bind(this);
		this.openModal = this.openModal.bind(this);
		this.onSortChange = this.onSortChange.bind(this);
	}

	buttonFormatter(cell, row) {
		return (
			<div>
				<button onClick={this.openModal}>ver</button>
				<Detallep open={this.state.open} datos={row} onClose={this.openModal} />
			</div>
		);
	}

	openModal = (e) => {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	};

	stateFromatter(cell, row) {
		return <Estado datos={row}></Estado>
	}

	onSortChange(sortName, sortOrder) {
		this.setState({
			sortName,
			sortOrder
		});
	}

	parseDate = (s) => {
		
	}

	dateFormatter(cell, row) {
		let s = cell;

		let months = {
			jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
			jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
		};
		let p = s.split('-');
		let date = new Date(p[0], months[p[1].toLowerCase()], p[2]);
		return  `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + (date.getDate() - 1)).slice(-2)}/${date.getFullYear()}`;
	}

	render() {
		const options = {
			sortName: this.state.sortName,
			sortOrder: this.state.sortOrder,
			onSortChange: this.onSortChange
		};
		return (
			<div>
				<PedidosNav></PedidosNav>
				<BootstrapTable data={this.props.datos} options={options}>
					<TableHeaderColumn isKey dataField='idpedido' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }}>
						ID
					</TableHeaderColumn>
					<TableHeaderColumn dataField='fecha_pedido' dataSort={true} dataFormat={this.dateFormatter} >
						Fecha
					</TableHeaderColumn>
					<TableHeaderColumn dataField='user' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }}>
						Usuario
					</TableHeaderColumn>
					<TableHeaderColumn dataField='aceptado' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }}>
						Aceptado
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