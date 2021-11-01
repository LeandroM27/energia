import Navbar from './componets/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Factura from './pages/Factura';
import Historial from './pages/Historial';

import {useState, useEffect} from 'react';

function App() {

  useEffect(() => {
    const getDatos = async () => {
      const factServer = await fetchFact();
      setDatosFactura(factServer);
    }

    getDatos();

  }, []);

  //traer datos

  const fetchFact = async () => {
    const userPayload = 123456;
    const url = `http://localhost:8080/facturas/${userPayload}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.facturas;
  };

  //insertar datos

  const agregarFact = async (factura) => {
    fetch('http://localhost:8080/facturas', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(factura),
    })

    /*normalmente la res de la ruta post trae el dato creado
    en nuestro caso el endpoint es diferente asi que no es necesario
    guardar la respuesta*/

    setDatosFactura([...datosFactura, factura])

    
  };

  const [datosFactura, setDatosFactura] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={
            (porps) => (
              <>
                <Dashboard datosFactura={datosFactura}/>
              </>
            )
          }/>
          <Route path="/factura" render={
            (porps) => (
              <>
                <Factura agregarDatos={agregarFact}/>
              </>
            )
          }/>
          <Route path="/historial" render={
            (porps) => (
              <>
                <Historial datosFactura={datosFactura}/>
              </>
            )
          }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;