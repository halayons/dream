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
        <label className="field" >{this.props.datos.full_name == "" ? 'Sin nombre' : this.props.datos.full_name}</label>
        <label className="title">Correo</label>
        <label className="field" >{this.props.datos.email}</label>
        <label className="title">Último inicio</label>
        <label className="field">{dateFormat(this.props.datos.last_login, "mm/dd/yyyy")}</label>
        <label className="title">Número de Pasteles Creados</label>
        <label className="field" >{this.props.datos.pasteles.length}</label>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-primary" type="button">Button</button>
          <button class="btn btn-primary" type="button">Button</button>
        </div>
      </div>
    );
  }
}