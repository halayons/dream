import logo from './logo.svg';

import './App.css';

function Ingreso(){
  return(<div id="ingreso">
    <form>
        <h1>Ingreso</h1>
        <p>Usuario:</p>
        <input id="caja" type="text"/>
        <p>Contraseña:</p>
        <input id="caja"
          type="text"
        />
        <p><button id="boton" onclick="ingresar">Ingresar</button></p>
      </form>
  </div>)
}

function Imagen(){
  return(<div id="imagen">
    <img src="descaga(2).png'" />

  </div>)
}

function App() {
  return (
    <div ><Ingreso/><Imagen/></div>
  );
}

export default App;
