import React from "react"; 
import dateFormat from 'dateformat';

export class Account extends React.Component {

    constructor(props) {
		super(props);
	}

    render() {
		return (
			<div className="div-account">
                <label className="title">Nombre</label>
                <input className="account-Name" type="text"/>
                <label className="title">Correo</label>
                <label className="block-field" >{this.props.datos.email}</label>
                <label className="title">Último inicio</label>
                <label className="block-field">{dateFormat(this.props.datos.last_login, "mm/dd/yyyy")}</label>
                <label className="title">Número de Pasteles Creados</label>
                <label className="block-field" >{this.props.datos.pasteles.length}</label>
                <label className="title">Imagen</label>
			</div>
		);
	}
}