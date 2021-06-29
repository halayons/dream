import React from "react";
import dateFormat from 'dateformat';
import { Update } from "./update";

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
        <button type="button"  href="#update" className="btn-update" style={{ width: 11 + 'em' }} data-toggle="modal">Actualizar</button>
        <div className="modal fade" id="update">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-body">
                <Update datos = {this.props.datos}></Update>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-info" id="btnModal" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}