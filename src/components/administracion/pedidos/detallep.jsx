import React from "react";
import logo from '../../../static/images/logo.png';

export class Detallep extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        
    }

    
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (this.props.open) {
            return null;
        }
       
        

        const componentClicked = () => {
            alert('Evento onClick');
        }

        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                <img src={logo} class="img-logo" ></img>
                    <h1>Pedido</h1>
                    <h1>Foto</h1>         
                        
                    <button >En proceso</button>
                    <button >Entregado</button>  
                        <button onClick={this.onClose}>Salir</button>
                    
                </div>
            </section>
        );
    }
}