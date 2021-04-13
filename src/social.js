import './social.css';
import imagen1 from './cake.jpg';
import imagen2 from './cara.jpg';
import logo from './logo.svg';
import like from './like.png';
import React from 'react';


class Social_app extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: [],
        };
    }
    funtion (a){
        var l=a.length;
        var ll=a.substring(13,l)
        return ll;
    }
    fecha (a){
       return a.substring(0,9);
    }
    usuarios(e){
        return( <div className ="customer">
        <div className ="cakeC">
           <img src={"http://localhost:8000/" +this.funtion(e.foto)}  className ="cake"></img>
        </div>
        <div className ="photoC">
           <img src ={"media/posts/users/"+ e.usuario+".jpg"} className ="photo"/>
        </div>

         <div className="infoC">
            <td>
             <div className ="nameC">
                <p> usuario:</p>
                 {e.usuario}
             </div>
             <div className ="date">
                <p> fecha:</p>{this.fecha(e.published_date)}
             </div>
            </td>

             <td>
             <div className ="counterLikes">
                 <img src ={like} className ="likes"></img><p>{e.likes}</p>
             </div>
             </td>
        </div>


     </div>);

    }
    
     componentWillMount=() => {

        fetch('http://localhost:8000/social/', {method : 'GET'})
         .then((response)=> response.json())
         .then(responseJson=>{this.setState({data :responseJson})}
          );
     } 
    
    render(){
        if (this.state.data.length > 0) {
            return (
                <div className ="social_app">
                    <div className ="content">
                        <div>
                            {this.state.data.map(e=>this.usuarios(e))} 
                        </div>
                    </div>
                
                </div>
            )
            } else {
                  return <p className="text-center">Cargando empleados...</p>
            }
        }

}
export default Social_app;