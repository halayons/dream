import React from "react";

export class Options extends React.Component {

    constructor(props){
        super(props);
        this.setCurrent = this.setCurrent.bind(this);
    }

    setCurrent(event){
        this.props.handleButton(parseInt(event.target.name));
    }
    
    render() {
        return (
            <div className="div_options">
                <div className="btn-group-vertical">
                    <button name = {0} onClick={this.setCurrent} type="button" class="option- btn">Mi Cuenta</button>
                    <button name = {1} onClick={this.setCurrent} type="button" class="option- btn">Mis Pasteles </button>
                    <button name = {2} onClick={this.setCurrent} type="button" class="option- btn">Mis Pedidos</button>
                    <button type="button" class="btn ">Cerrar Sesión</button>
                </div>
            </div>
        );
    }

}