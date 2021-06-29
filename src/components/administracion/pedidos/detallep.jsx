import React from "react";
import logo from '../../../static/images/logo.svg';

export class Detallep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idpedido: 'sds',
      datos: ''
    }

  }
  componentDidUpdate(nextProps) {
    for (let i = 0; i < this.props.datos; i++)
    if (this.props.datos[i].idpedido == nextProps.current) {
      console.log(this.props.datos[i])
      this.setState({ datos: this.props.datos[i] })
    }
  }


  render() {


    return (
      <div className="modal fade" id="ver">
        <section className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-body ">


              <div className="modal-header row justify-content-center">
                <img src={logo} className=" row img-logo col-3" />
              </div>


              <h2>{this.state.datos.idpedido}</h2>



              <label className="btn">Foto</label>

              <br />



              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-outline-info" id="btnModal" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}

