import React from "react";

export class Options extends React.Component {


    
    render() {
        return (
            <div className="div_options">
                <div className="btn-group-vertical">
                    <button type="button" class="btn ">Mi Cuenta</button>
                    <button type="button" class="btn ">Mis Pasteles </button>
                    <button type="button" class="btn ">Mis Pedidos</button>
                    <button type="button" class="btn ">Cerrar Sesión</button>
                </div>
            </div>
        );
    }

}