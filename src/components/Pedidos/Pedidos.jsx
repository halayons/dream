import React, {useState} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Dropdown,DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import "./style.scss";


export default class Pedido extends React.Component {
    constructor(props) {
        
        super(props);
       
        this.state = {
                Masa: 'Sin masa',
                Relleno: 'Sin relleno',
                Cobertura: 'Sin cubierta',
                Color: '#FFFFFF',
                Porciones: '1',
                Tematica:''

        };
    }
    seleccionM =(event)=> {this.setState({Masa:event.target.id})}
    seleccionR =(event)=> {this.setState({Relleno:event.target.id})}
    seleccionC =(event)=> {this.setState({Cobertura:event.target.id})}
    seleccionP =(event)=> {this.setState({Porciones:event.target.id})}
    seleccionT =(event)=> {this.setState({Tematica:event.target.id})}

    
    componentDidMount() {
        fetch('http://localhost:8000/pasteles/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
     }
     
     
    render() {
        
        
        return (
            <div className =" d-flex">
                <div className= "drawCake col-sm-4">
                    <Pastel></Pastel>
                </div>
                <div className ="opciones col-sm-4">
                <div style ={{margin:5+'px'}}>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                            Masa
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item"   onClick= {this.seleccionM} id="RedVelvet">RedVelvet</a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionM} id="Tres Leches"> Tres Leches</a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionM} id="Vainilla"> Vainilla </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionM} id="Chocolate">  Chocolate</a></li>
                        </ul>
                    </div>
                    
                </div>

                <div style ={{margin:5+'px'}}>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                            Relleno
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item"   onClick= {this.seleccionR} id="Arequipe">Arequipe</a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionR} id="Nutella"> Nutella</a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionR} id="Mermelada "> Mermelada  </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionR} id="Mermelada "> Mermelada  </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionR} id="Frutas  "> Frutas </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionR}  id="Chantilly "> Chantilly  </a></li>
                        </ul>
                    </div>
                    
                </div>

                <div style ={{margin:5+'px'}}>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                             Cubierta
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item"   onClick= {this.seleccionC} id="Fondant ">Fondant </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionC} id="Crema Pastelera">Crema Pastelera </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionC} id="Crema de Chantilly"> Crema de Chantilly </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionC} id="Crema de Mantequilla"> Crema de Mantequilla </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionC} id="Sin Cobertura"> Sin Cobertura </a></li>
                        </ul>
                    </div>
                    
                </div> 
                <div style ={{margin:5+'px'}}>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                             Porciones
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item"   onClick= {this.seleccionP} id="1-35 ">1-35 </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionP} id="35-60">35-60 </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionP} id="60-100"> 60-100</a></li>
                        </ul>
                    </div>
                    
                </div> 
                <div style ={{margin:5+'px'}}>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                             Tematica
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" onClick= {this.seleccionT} id="Matrimonio ">Matrimonio </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionT} id="Grado ">Grado </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionT} id="Cumpleaños"> Cumpleaños </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionT} id="Comunion"> Comunion </a></li>
                            <li><a class="dropdown-item" onClick= {this.seleccionT} id="Casual"> Casual </a></li>
                        </ul>
                    </div>
                    {console.log(this.state )}
                </div> 
                                             
            </div>
            </div>
               
                        
        )
    }

}

export  class Pastel extends React.Component{
    render(){
        return(
            <div className ="contentP">
                <div> 
                    
                    <div className="pastel" ></div>
                    <div className="pastelT"></div>
                    <div className="pastelB"></div>
                </div>
            </div>
        )
    }
}