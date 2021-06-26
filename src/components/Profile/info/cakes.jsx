import React from "react";
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class Cakes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            sortName: undefined,
            sortOrder: undefined
		}

		this.onSortChange = this.onSortChange.bind(this);
	}

    formaFromatter(cell, row) {
        const formas = {
            'CI': 'Circular',
            'CU': 'Cuadrado',
        }
        return formas[row.forma];
    }

    masaFormatter(cell, row) {
        const masas = {
            'VA': 'Vainilla',
            'CH': 'Chocolate',
            'TL': 'Tres Leches',
            'RV': 'RedVelvet',
        }
        return masas[row.masa];
    }

    rellenoFormatter(cell, row) {
        const rellenos = {
            'AQ': 'Arequipe',
            'NU': 'Nutella',
            'ML': 'Mermelada',
            'CP': 'CremaPastelera',
        }
        return rellenos[row.relleno]
    }

    coberturaFormatter(cell, row) {
        const coberturas = {
            'CR': 'Crema',
            'FD': 'Fondant',
        }
        return coberturas[row.cobertura]
    }

	colorFormatter(cell, row){
		return row.color
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
				<TableHeaderColumn isKey dataField='id' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }} >
					ID
				</TableHeaderColumn>
				<TableHeaderColumn dataField='num_pisos' dataSort={true} filter={{ type: 'TextFilter', delay: 200 }}>
					Pisos
				</TableHeaderColumn>
				<TableHeaderColumn dataField='forma' dataSort={true} dataFormat={this.formaFromatter}>
					Forma
				</TableHeaderColumn>
				<TableHeaderColumn dataField='masa' dataSort={true} dataFormat={this.masaFormatter}>
					Masa
				</TableHeaderColumn>
				<TableHeaderColumn dataField='relleno' dataSort={true} dataFormat={this.rellenoFormatter}>
					Relleno
				</TableHeaderColumn>
				<TableHeaderColumn dataField='cobertura' dataSort={true} dataFormat={this.coberturaFormatter}>
					Cobertura
				</TableHeaderColumn>
				<TableHeaderColumn dataField='color' dataSort={true} dataFormat={this.colorFormatter}>
					Color
				</TableHeaderColumn>
				<TableHeaderColumn dataField='costo' dataSort={true}>
					Costo
				</TableHeaderColumn>
				<TableHeaderColumn dataField='mensaje' dataSort={true}>
					Mensaje
				</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}
