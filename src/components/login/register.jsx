import React from "react";

export class Register extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="registro" ref={this.props.containerRef}>
            
            
            <div className="form">
             <input id="caja" type="text" placeholder="Nombre"/>
        <input id="caja" type="text" placeholder="Correo"/>
        <input id="caja" type="text" placeholder="Contraseña"/>
        <p><button id="boton1" onclick="Registrarse" >registrarse</button></p>
        <p><button id="boton2" onclick="inicio()">Iniciar Sesion</button></p>

            
          </div>
        </div>
    }

}