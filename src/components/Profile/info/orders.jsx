import React from "react";
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class Orders extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortName: undefined,
			sortOrder: undefined
		}

		this.onSortChange = this.onSortChange.bind(this);
	}

	estadoFormatter(cell, row) {
		let estados = ['En proceso', 'Enviado', 'Entregado'];
		return estados[row.estado]
	}

	aceptadoFormatter(cell, row) {
		return row.aceptado ? 'Aceptado' : 'No aceptado'
	}

	onSortChange(sortName, sortOrder) {
		this.setState({
			sortName,
			sortOrder
		});
	}


	render() {
		const options = {
			sortName: this.state.sortName,
			sortOrder: this.state.sortOrder,
			onSortChange: this.onSortChange,

			hideSizePerPage: true
		};

		return (
			<div className="div-table">
				<BootstrapTable data={this.props.datos} pagination={true} options={options}>
					<TableHeaderColumn width='150' isKey dataField='idpedido' dataSort={true} filter={{ className: 'Filter', type: 'TextFilter', delay: 200 }}>
						ID
					</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='fecha_pedido' dataSort={true} dataFormat={this.dateFormatter} >
						Fecha
					</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='aceptado' dataSort={true} filter={{ className: 'Filter', type: 'TextFilter', delay: 200 }} dataFormat={this.aceptadoFormatter}>
						Aceptado
					</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='estado' dataFormat={this.estadoFormatter}>
						Estado
					</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='direccion' dataSort={true}>
						Direccion
					</TableHeaderColumn>
					<TableHeaderColumn width='150' dataField='costo' dataSort={true} >
						Costo
					</TableHeaderColumn>
				</BootstrapTable>
			</div>
		);
	}
}
