import React from 'react';
import './Banner.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/popper.js/dist/umd/popper.min.js";
import "../node_modules/jquery/dist/jquery.slim.min.js";


class Banner_app extends React.Component{
    render(){
        return(
<div>
  <div id="carouselPromos" className="carousel slide carousel-fade" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselPromos" data-slide-to="0" className="active"></li>
        <li data-target="#carouselPromos" data-slide-to="1"></li>
        <li data-target="#carouselPromos" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
            <div className="carousel-item active">
                <div id="opacity_div"></div>
                <div className="overlay-image"></div>
                <div className="carousel-caption d-none d-md-block" >
                    <h3>PROMO </h3>
                        <h5>A tan solo 5lukitas uwu</h5>
                </div>
            </div>
            <div className="carousel-item ">
                <div className="overlay-image"></div>
                <div className="carousel-caption d-none d-md-block">
                    <h3>PROMO </h3>
                        <h5>Esta bien mela a 3 veci</h5>
                </div>
            </div>
            <div className="carousel-item">
                <div className="overlay-image"></div>
                <div className="carousel-caption d-none d-md-block">
                    <h3>PROMO </h3>
                        <h5>Esta que está toa buena a 10 </h5>
                </div>
            </div>

    </div>
    </div>
    
    
    <div className="overlay-text col-md-6 justify-content-center " >
        <h2>Crea tu Pastel</h2>
        <p>1.) ¡Registrate!</p>
        <p>2.) ¡Elige la crema! </p>
        <p>3.) ¡Selecciona el tipo de torta!</p>
        <p>4.) ¡Ponle el relleno!</p>
        <p>5.) ¡Decoralo a tu antojo!</p>

      
        <button type="button" className="btn-start mx-auto d-md-block"> COMENZAR </button>
    
    </div >
    </div >
       
    
    
        )
    }
}

export default Banner_app;