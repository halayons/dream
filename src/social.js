import './social.css';
import imagen1 from './cake.jpg';
import imagen2 from './cara.jpg';
import logo from './logo.svg';
function Social_app() {
  return (
   <div className ="social_app">
    
       <div className = "tittle">
           <div><h1>Dream Cakers</h1></div>
       </div>
       <div className ="content">
           <div>
               <div className ="customer">
                   <div className ="cakeC">
                       <img src ={imagen1} className ="cake"/>
                   </div>
                   <div className ="photoC">
                      <img src ={imagen2} className ="photo"/>
                   </div>

                    <div className="infoC">
                        <div className ="nameC">
                             <p>Andres Flipe Snchez Cuatindioy</p>
                        </div>
                        <div className ="date">
                            <p>6/marzo/2021</p>
                        </div>
                        <div className ="counteLikes">
                             <p>5</p>
                        </div>
                   </div>


                </div>


                <div className ="customer">
                   <div className ="cakeC">
                       <img src ={imagen1} className ="cake"/>
                   </div>
                   <div className ="photoC">
                      <img src ={imagen2} className ="photo"/>
                   </div>

                    <div className="infoC">
                        <div className ="nameC">
                             <p>Andres Flipe Snchez Cuatindioy</p>
                        </div>
                        <div className ="date">
                            <p>6/marzo/2021</p>
                        </div>
                        <div className ="counteLikes">
                             <p>5</p>
                        </div>
                   </div>


                </div>


                <div className ="customer">
                   <div className ="cakeC">
                       <img src ={imagen1} className ="cake"/>
                   </div>
                   <div className ="photoC">
                      <img src ={imagen2} className ="photo"/>
                   </div>

                    <div className="infoC">
                        <div className ="nameC">
                             <p>Andres Flipe Snchez Cuatindioy</p>
                        </div>
                        <div className ="date">
                            <p>6/marzo/2021</p>
                        </div>
                        <div className ="counteLikes">
                             <p>5</p>
                        </div>
                   </div>


                </div>

           </div>
       </div>
       
   </div>
  );
}

export default Social_app;
