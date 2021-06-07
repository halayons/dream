import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min";
import "../../../node_modules/popper.js/dist/umd/popper.min";
import "../../../node_modules/jquery/dist/jquery.slim.min";


export class Banner extends React.Component {

    state = {
        promos: []
    }

    pedido(){
        window.location.pathname = "/accounts/pedido/"
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/photos/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ promos: data })
        })
        .catch(console.log)
    }

      promos = ({ promos }) => {
          
        return (
            
            <div>
                
                <div>
                <div id="carouselPromos" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselPromos" data-slide-to="0"></li>
                        <li data-target="#carouselPromos" data-slide-to="1"></li>
                        <li data-target="#carouselPromos" data-slide-to="2"></li>
                        <li data-target="#carouselPromos" data-slide-to="3"></li>
                        <li data-target="#carouselPromos" data-slide-to="4"></li>
                    </ol>
                    
                    <div className="carousel-inner">
                        <div>
                            <div className="carousel-item active">
                                <div id="opacity_div "></div>
                                
                                <div className="row h-100 "> 
                                <div className=" col-sm-12 text-center my-auto" >
                                    <h2>Crea tu Pastel</h2> 
                                    <p>1.) ¡Registrate! </p>
                                    <p>2.) ¡Elige la crema! </p>
                                    <p>3.) ¡Selecciona el tipo de torta! </p>
                                    <p>4.) ¡Ponle el relleno! </p>
                                    <p>5.) ¡Decoralo a tu antojo! </p>


                                    <button type="button" className="btn-start mx-auto d-md-block" onClick={this.pedido}> COMENZAR </button>
                                    
                                </div >
                                </div>
                                <div className="carousel-caption d-none d-md-block" >
                                    <h3>Conoce nuestras promociones</h3>
                                </div>
                            </div>
                            
                            {promos.map((promo) => (
                                <div className="carousel-item">
                                    <div id="opacity_div"></div>
                                    <div className="overlay-image">
                                        <div class="d-flex justify-content-center"><img src={promo.image} class="center"/></div>
                                        
                                    </div>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>{promo.title}</h1>
                                            <h5>{promo.text}</h5>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                
            </div >

            </div >
          
        )
      };
      
    

    render() {
        return ( <this.promos promos={this.state.promos} />



        )
    }
}
