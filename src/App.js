import logo from './logo.svg';
import imgone from './logo.jpg';

import './App.css';

function Ingreso(){
  return(<div id="ingreso">
    <form>
        <input id="caja" type="text" placeholder="Nombre"/>
        <input id="caja" type="text" placeholder="Correo"/>
        <input id="caja" type="text" placeholder="Contraseña"/>
        <p><button id="boton1" onclick="Registrarse" >registrarse</button></p>
        <p><button id="boton2" onclick="iniciar">Iniciar Sesion</button></p>
      </form>
  </div>)
}

function Imagen(){
  return(<div id="imagen">
    <div id= "logo" >
    
    </div>
   
    
  </div>)
}

function App() {
  return (
    <div ><Ingreso/><Imagen/></div>
  );
}

export default App;
