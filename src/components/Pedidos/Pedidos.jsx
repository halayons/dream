import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import {SliderPicker} from 'react-color';
import { Social, Footer, Header} from "../landingPage/index";
import {Login} from '../login/login'
import {Register} from '../login/register'
import Cookies from 'js-cookie';
import { event, get } from 'jquery';


export class Pedido extends React.Component{
    
    render()    {
        return(
            <div>
                <Header></Header>
                <Index></Index>
                <Footer></Footer>
            </div>
    
        )
    }
}

export  class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                masa: 'TL',
                relleno: 'CP',
                cobertura: 'CR',
                color: '#FFFFFF',
                porciones: 1,
                forma:'CI',    
                mensaje:'',
                status_pastel:true,
                num_pisos:1,
                costo:0,

               // Tematica:'',
               // Observaciones:''
        };
    }


    actualizar(){
        let chocolate ='url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png")';
        let vainilla ='url("https://www.transparenttextures.com/patterns/asfalt-dark.png")';
        let leches = ' url("https://www.transparenttextures.com/patterns/ravenna.png")';
        let velvet =  'url("https://www.transparenttextures.com/patterns/crisp-paper-ruffles.png")';
        let textura = "";

        if(this.state.Masa === 'RedVelvet'){
            textura = velvet;
        }
        else if(this.state.Masa === 'Tres Leches'){
            textura = leches;
        }
        else if(this.state.Masa === 'Vainilla'){
            textura = vainilla;
        }
        else if(this.state.Masa === 'Chocolate'){
            textura = chocolate;
        }
        document.documentElement.style.setProperty('--textura-pastel',textura);
    }
    
    seleccionF =(event)=> {this.setState({forma:event.target.id}) }
    seleccionM =(event)=> {this.setState({masa:event.target.id}) }
    seleccionR =(event)=> {this.setState({relleno:event.target.id})}
    seleccionC =(event)=> {this.setState({cobertura:event.target.id})}
    seleccionP =(event)=> {this.setState({porciones:parseInt(event.target.id)})}
    //seleccionT =(event)=> {this.setState({Tematica:event.target.id})}
    seleccionColor =(event)=> {this.setState({color:event.target.id});}
    getData=(info)=>{
        this.setState({Mensaje:info.Men})
        this.setState({Observaciones:info.Obs})
    }
   
    postearPastel() {
        console.log("vamos a postear el pastel");
        console.log(Cookies.get('csrftoken'))
       fetch('http://localhost:8000/crear_pastel/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
                
            },
            credentials:'include',
            body: JSON.stringify(this.state)
        }).then((response) => response.json())
        .catch(error => console.error('Error:', error));
        
    }

    
     
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    
     
    render() {
        let color =this.state.color;   
        const f =this.state.forma;
        document.documentElement.style.setProperty('--color-pastel',color);
        this.actualizar()
        

        return (
            

                <div className ="container  d-flex  justify-content-center ">
                
                                   
                    <div className ="opciones  col-sm-3">
                        <div style ={{margin:5+'px'}}>
                            <div class="dropdown">
                                <button class="btn btn-outline-info  btn-reserva dropdown-toggle" style ={{width:11+'em'}} type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                    Forma
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item"   onClick= {this.seleccionF} id="CI" selected>Redondo</a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionF} id="CU"> Cuadrado</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div style ={{margin:5+'px'}}>
                            <div class="dropdown">
                                <button class="btn btn-outline-info  btn-reserva dropdown-toggle" style ={{width:11+'em'}} type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                    Masa
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item"   onClick= {this.seleccionM} id="RV">RedVelvet</a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionM} id="TL"> Tres Leches</a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionM} id="VA"> Vainilla </a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionM} id="CH">  Chocolate</a></li>
                                </ul>
                            </div>
                            
                        </div>

                        <div style ={{margin:5+'px'}}>
                            <div class="dropdown">
                                <button class="btn btn-outline-info  btn-reserva dropdown-toggle" style ={{width:11+'em'}} type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                    Relleno
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item"   onClick= {this.seleccionR} id="AQ">Arequipe</a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionR} id="NU"> Nutella</a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionR} id="ML"> Mermelada  </a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionR} id="CP"> CremaPastelera </a></li>

                                </ul>
                            </div>
                            
                        </div>
                        <div style ={{margin:5+'px'}}>
                            <div class="dropdown">
                                <button class="btn btn-outline-info  btn-reserva dropdown-toggle" style ={{width:11+'em'}} type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                    Cubierta
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item"   onClick= {this.seleccionC} id="FD">Fondant </a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionC} id="CR">Crema</a></li>
                                   {/* <li><a class="dropdown-item" onClick= {this.seleccionC} id="Crema de Chantilly"> Crema de Chantilly </a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionC} id="Crema de Mantequilla"> Crema de Mantequilla </a></li>
                                       <li><a class="dropdown-item" onClick= {this.seleccionC} id="Sin Cobertura"> Sin Cobertura </a></li>*/}
                                </ul>
                            </div>
                            
                        </div> 
                        <div style ={{margin:5+'px'}}>
                            <div class="dropdown">
                                <button class="btn btn-outline-info  btn-reserva dropdown-toggle" style ={{width:11+'em'}} type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                    Porciones
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item"   onClick= {this.seleccionP} id="15">1-35 </a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionP} id="2">35-60 </a></li>
                                    <li><a class="dropdown-item" onClick= {this.seleccionP} id="3"> 60-100</a></li>
                                </ul>
                            </div>
                            
                        </div> 
                        <div style ={{margin:5+'px'}}>
                            <div class="dropdown">
                                <button class="btn btn-outline-info  btn-reserva dropdown-toggle" style ={{width:11+'em'}} type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
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
                        <div style ={{margin:10+'px', width:10.5+'em',marginLeft:'auto',marginRight:'auto'}}>
                            <SliderPicker color = {this.state.color}
                            onChangeComplete ={this.handleChangeComplete}>
                            </SliderPicker>
                        </div>
                        
                    </div>
                    <div className= "col-sm-3" >
                       {f=='CI' ?(<Pastel></Pastel>) : (<PastelC></PastelC>)}
                    </div>
                    <div className="col-sm-3" style ={{marginTop:10+'px'}}>
                        <Mensaje getData={this.getData}   Pastel={this.state} ></Mensaje> 
                        
                    </div>
                   
                    
            </div>
               
                        
        )
    }

}

export  class Pastel extends React.Component{
    render(){
        return(
            
                <div className ='draw'> 
                    <div className="pastel col-sm-12" ></div>
                    <div className="pastelB tapas"></div>
                    <div className="pastelT tapas"></div>
                    <div className ='Dtwo '> 
                        <div className="pastel pasteltwo col-sm-12 " ></div>
                        <div className="pastelB pastelBtwo tapas "></div>
                        <div className="pastelT pastelTtwo tapas "></div>
                    </div>
                </div>
            
        )
    }
}
export  class PastelC extends React.Component{
    render(){
     
        return(
            <div class="contenedor">

                    <div class="cubo">
                      <div class="uno"></div>
                      <div class="dos"></div>
                      <div class="tres"></div>
                      <div class="cuatro"></div>
                      <div class="cinco"></div>
                      <div class="seis"></div>
                  </div>
                  </div>
                
        )    
    
}
}
export class LoginOrRegister extends React.Component{
    render(){
        return(
            <div>
                <ul class="nav nav-tabs" id ="myTab" role ="tablist">
                    <li class ="nav-item">
                        <a class ="nav-link active badge badge-info" id ="login-tab" data-toggle ="tab" href ="#login" role ="tab" aria-controls ="login" aria-selected = "true"><span>Login</span> </a>
                    </li>
                    <li class ="nav-item">
                        <a class ="nav-link badge badge-info" id ="register-tab" data-toggle ="tab" href ="#register" role ="tab" aria-controls ="resgister" aria-selected ="false"><span>Register</span></a>
                    </li>
                </ul>

                <div class ="tab-content " id ="myTabContent">
                    <div class="tab-pane fade  show active " id ="login" role="tabpanel" aria-labelledby="login-tab">
                        <div class="card  ">
                            <Login></Login>
                        </div>
                    </div>
                    <div class="tab-pane fade " id ="register" role ="tabpanel" aria-labelledby ="register-tab">
                        <div class="card ">
                           <Register></Register>
                        </div>
                    </div>
                </div>
                
                
            </div>
            

        )
    }
}


export class Mensaje extends Index{
    constructor(props) {
        super(props);
        this.state={
            Men:'',
            Obs:'',
            log:'1',
            user:'',
            pastel:-1,
        };
    }
    getM=(e)=>{
       this.setState({Men: e.target.value})
    }
    getO=(e)=>{
        this.setState({Obs: e.target.value})
        console.log(this.state, this.props.pastel)

     }
    componentDidMount = () => {

        let requestOptions ={
            method: 'GET',
            //headers: { 'Content-Type': 'application/json', 'Authorization':"Bearer "+Cookies.get("csrftoken"),"Host":"localhost"},
            credentials:'include'
         
        };
        
        fetch('http://localhost:8000/users/api/auth/user/',requestOptions)
            .then((response) => response.json())
            .then(responseJson => {  if(responseJson.email!=undefined){this.setState({log:'0',user:responseJson.email})} }
            );
    }
    userExist = () => {

        let requestOptions ={
            method: 'GET',
            //headers: { 'Content-Type': 'application/json', 'Authorization':"Bearer "+Cookies.get("csrftoken"),"Host":"localhost"},
            credentials:'include'
         
        };
        console.log("el usuario automatico=")
        fetch('http://localhost:8000/users/api/auth/user/',requestOptions)
            .then((response) => response.json())
            .then(responseJson => { console.log("email:"+responseJson.email); if(responseJson.email!=undefined){this.setState({log:'0'})} }
            );
    }
    postearPastel() {

      if (this.state.pastel == -1){
        fetch('http://localhost:8000/crear_pastel/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
                
            },
            credentials:'include',
            body: JSON.stringify(this.props.Pastel)
        }).then((response) => response.json())
        .catch(error => console.error('Error:', error))
        .then(response =>( console.log("Pastel "+response.data.id), this.setState({pastel:"Pastel "+response.data.id}))  );
      }
    }
    
   
    
   
    render(){
        const f =this.state.log;
        const {getData}= this.props;
        return(
            
        <div>
            <form className ="" style ={{border:'#17a2b8', color:'#17a2b8'}}>
                <div className="form-row">
                    <label for ="mensaje">Mensaje</label>
                    <textarea value={this.state.Men}  onChange={this.getM} type="text" className="form-control" ref={this.mensaje} id ="mensaje "placeholder="Mensaje" rows="3"></textarea>
                </div>
                <div className="form-row">
                    <label for ="observaciones">Observaciones</label>
                    <textarea value={this.state.Obs}  onChange={this.getO} type ="text" className="form-control" ref={this.observaciones}id ="observaciones" placeholder ="Observaciones" rows="3"></textarea>
                </div>
            </form>

            <div class="formulario" style ={{marginTop:10+'px'}} >
                <button type="button" onClick={()=>getData(this.state),this.userExist,this.postearPastel.bind(this)} href ="#emergente" className="btn btn-info btn" style={{ width:11+'em'}} data-toggle ="modal">Continuar</button>
                <div className="modal fade" id="emergente">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            
                            <div className="modal-body">
                            {f=='0' ? ( <Formulario datos={this.state}></Formulario>):(<LoginOrRegister></LoginOrRegister>) }
                                
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-info" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
        
         )
    }
}

export class Formulario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                foto:'',
                direccion: 'Sin direccion',
                costo: -1,
                aceptado: false,
                domiciliario:true,
                estado: '1',
                comentario: '',    
                pastel:'',
                user:''
        };
    }
   
    postearPedido(e) {
        this.obtenerDatos();
        console.log("vamos a postear")
        fetch('http://localhost:8000/crear_pedido/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
                
            },
            credentials:'include',
            body: JSON.stringify(this.state)
        }).then((response) => response.json())
        .catch(error => console.error('Error:', error))
        .then(response =>( console.log(response))  );

        console.log("se posteo el pastel")
      //.then(responseJson =>  console.log("respueta del postera Pedido",responseJson));
      e.preventDefault();
      e.stopPropagation();
    }
    obtenerDatos(event){
        console.log("vamoas a obtener los datos")
        var {datos}=this.props;
        var getDireccion = document.getElementById('direccion').value;
        var getFile = document.getElementById('file').files[0];
        var getDomicilio=document.getElementById('domicilio').value;
        if (getDomicilio=="No"){
            getDomicilio=false;
        }else{ getDomicilio=true}
        this.setState({foto:getFile,direccion:getDireccion, domiciliario:getDomicilio, pastel:datos.pastel, comentario:datos.Obs, user:datos.user});
        console.log("se obtivieron los datos")
        //event.preventDefault();
        //event.stopPropagation();
    }
    ver=()=>console.log(this.state);
    
    

    render(){
        
        const {datos}=this.props;
            
        return(
            <form className ="container">
                <div className=" form-row">
                    <div className=" form-group">
                        <label for="direccion"> Dirección </label>
                        <input type = "text" class= "form-control" id="direccion" placeholder="Ingrese dirección" ></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="file"><span>Foto</span></label>
                    <input type ="file" className="col-sm "  id="file"  accept="image/*"></input>
                    <div id="draw"></div>
                    
                </div>
                <div className ="form-group">
                    <label for ="domicilio" > ¿Desea domicilio?</label><br />
                        <select name="domicilio"  id="domicilio">
                            <option selected value="Si">Si</option>
                            <option  value="No" >No</option>
                        </select>
                </div>
                    
                <button className="btn btn-dark" onClick={this.postearPedido.bind(this)}>Enviar</button>
                <button className="btn btn-dark" onClick={this.ver}>ver estado</button>

                
               
            </form>


        )
    }
}

