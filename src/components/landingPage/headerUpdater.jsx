import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class HeaderUpdater extends React.Component{
    constructor(){
        super();
        this.state = {userInfo: null}
        //this.userInfo = null;
    }
    componentDidMount(){        
        fetch('http://localhost:8000/users/api/auth/user/',{
        method: 'GET',
        credentials:'include',
        headers: {                
        },  
    }).then((response) => response.json())
        .then(responseJson => { 
            console.log('Esta es la info del usuario');
            this.setState({userInfo : responseJson})
            console.log(this.state.userInfo)}
            ).catch(error => console.error('Error:', error)); 
    }
    
    registrarse(){
        window.location.pathname = "/accounts/signup/"
    }

    iniciarSesion(){
        window.location.pathname = "/accounts/login/"
    }

    
    render(){    
        //var user_name = this.state.userInfo.short_name;
        console.log('isNull?'+this.state.userInfo == null);    
        if (this.state.userInfo == null || this.state.userInfo.hasOwnProperty('detail')){
            console.log('IF');  
            return(
                <div className="col-md-4 ver">
                    <button type="button" className="btn-register" onClick={this.registrarse}>Registrarse</button>
                    <button type="button" className="btn-login" onClick={this.iniciarSesion}>Iniciar Sesión</button>
                </div>  
                 
            );
        }
        else{ 
            console.log('ELSE');   
            return(       
                <div className="user-header">
                    <input type="image" className="img-user" src={this.state.userInfo.foto}/>
                    <h2 className="btname-user">{this.state.userInfo.short_name}</h2>
                </div>   
            );                                
        }
    }    
}
export default HeaderUpdater;