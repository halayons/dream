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
			onSortChange: this.onSortChange
		};

		return (
			<BootstrapTable data={this.props.datos} options={options}>
				<TableHeaderColumn isKey dataField='idpedido' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }} >
					ID
				</TableHeaderColumn>
				<TableHeaderColumn dataField='fecha_pedido' dataSort={true} dataFormat={this.dateFormatter} >
					Fecha
				</TableHeaderColumn>
				<TableHeaderColumn dataField='aceptado' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }} dataFormat={this.aceptadoFormatter}>
					Aceptado
				</TableHeaderColumn>
				<TableHeaderColumn dataField='estado' dataFormat={this.estadoFormatter}>
					Estado
				</TableHeaderColumn>
				<TableHeaderColumn dataField='direccion' dataSort={true}>
					Direccion
				</TableHeaderColumn>
				<TableHeaderColumn dataField='costo' dataSort={true}>
					Costo
				</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}
