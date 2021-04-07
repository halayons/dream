import React from "react";

export class Login extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="ingreso" ref={this.props.containerRef}>
            
            
            <div className="form">
             <input id="caja" type="text" placeholder="Correo"/>
        <input id="caja" type="text" placeholder="Contraseña"/>
        <p><button id="boton1" onclick="iniciar" >Iniciar Sesion</button></p>
        <p><button id="boton2" onClick="Registro">Nueva Cuenta</button></p>

            </div>
          </div>
        
    }

}