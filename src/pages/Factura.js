import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from "react-icons/fa";
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import PropTypes from 'prop-types';

function Factura({agregarDatos}) {
    const [startDate, setStartDate] = useState('');
    const [endtDate, setEndDate] = useState('');
    const [cargoEnergia, setCargoEnergia] = useState('');
    const [cargoComer, setCargoComer] = useState('');
    const [distribucion, setDistribucion] = useState('');
    const [tipoUso, setTipoUso] = useState('');
    const [mesFact, setMesFact] = useState('');
    const [diasFact, setDiasFact] = useState('');
    const [multi, setMulti] = useState('');
    const [kwh, setKwh] = useState('');
    const [idDist, setIdDist] = useState('');
    const [idUser, setIdUser] = useState('');
    const [correo, setCorreo] = useState('');

    /*faltan
    "id_usuario": 123456,
    "id_distribuidor": 1,
    "kwh": 160,
    "multiplicador": 1,
    "dias_facturados": 31,
    "mes_facturado": "2021-09-01T14:00",
    "tipo_uso": "residencial",
    "cargo_distribucion": 7.00,
    "cargo_comercializacion": 0.73,
    "cargo_energia": 19.04, 
    "cobro_desde": "2021-08-15T14:00",
    "cobro_hasta": "2021-09-15T14:00"
     */

    let convertir = (fecha) => {
        
        const partida = fecha.substring(5, 7);
                
        switch (partida) {
            case "01":
                return "Enero"
            case "02":
                return "Febrero"
            case "03":
                return "Marzo"
            case "04":
                return "Abril"
            case "05":
                return "Mayo"
            case "06":
                return "Junio"
            case "07":
                return "Julio"
            case "08":
                return "Agosto"
            case "09":
                return "Septiembre"
            case "10":
                return "Octubre"
            case "11":
                return "Noviembre"
            case "12":
                return "Diciembre"
            default:
                return "nope"
        };
    }

    let validarEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!startDate) {
            alert('porfavor agrege fecha de inicio');
            return;
        }
        if (!endtDate) {
            alert('porfavor agrege fecha hasta');
            return;
        }
        if (!cargoEnergia) {
            alert('ingrese cargo energia');
            return;
        }
        if (!cargoComer) {
            alert('ingrese cargo comerzialiacion');
            return;
        }
        if (!distribucion) {
            alert('ingrese cargo distribucion');
            return;
        }
        if (!tipoUso) {
            alert('ingrese tipo de uso');
            return;
        }
        if (!mesFact) {
            alert('ingrese mes facturado');
            return;
        }
        if (!diasFact) {
            alert('ingrese dias facturados');
            return;
        }
        if (!multi) {
            alert('ingrese multiplicador');
            return;
        }
        if (!kwh) {
            alert('ingrese kwh');
            return;
        }
        if (!idDist) {
            alert('ingrese distribuidor');
            return;
        }
        if (!idUser) {
            alert('ingrese usuario');
            return;
        }
        if (!correo) {
            alert('ingrese correo');
            return;
        }
        if(convertir(mesFact) !== convertir(endtDate)){
            alert('El mes facturado no coincide con el mes hasta');
            return;
        }

        if(validarEmail(correo)){
            alert('el correo que ah ingresado no es valido');
            return;
        }
        
        agregarDatos({ id_usuario:idUser, 
            id_distribuidor:idDist, 
            kwh:parseFloat(kwh), 
            multiplicador:multi, 
            dias_facturados:diasFact, 
            mes_facturado:mesFact, 
            tipo_uso:tipoUso, 
            cargo_distribucion:parseFloat(distribucion), 
            cargo_comercializacion:parseFloat(cargoComer), 
            cargo_energia:parseFloat(cargoEnergia), 
            cobro_desde:startDate, 
            cobro_hasta:endtDate, 
            correo:correo });


            setStartDate('');
            setEndDate('');
            setCargoEnergia('');
            setCargoComer('');
            setDistribucion('');
            setTipoUso('');
            setMesFact('');
            setDiasFact('');
            setMulti('');
            setKwh('');
            setIdDist('');
            setIdUser('');
            setCorreo('');

            alert('Se han insertado los datos correctamente');
        
        
      }

    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <form onSubmit={onSubmit} >
                    
                        <h1 className="mt-4"><FaIcons.FaDatabase/> Ingreso de datos</h1><br /><br />
                        <div className="row">
                            <div className="col-12">
                                <h5>Información de la Factura</h5><br />
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label for="desde">Fecha desde</label>
                                        <div className="col-12">
                                            <input type="datetime-local" 
                                            className="form-control" 
                                            id="cargoEnergia" 
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6 form-group">
                                        <label for="hasta">Fecha hasta</label>
                                        <div className="col-12">
                                        <input type="datetime-local" 
                                        className="form-control" 
                                        id="cargoEnergia" 
                                        value={endtDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                         />
                                        </div>
                                    </div>
                                </div><br />

                                <div className="row">
                                    <div className="col-4 form-group">
                                        <label for="distribucion">Cargo de energia</label>
                                        <input type="number"
                                        step="any" 
                                        className="form-control" 
                                        id="cargoEnergia" 
                                        placeholder="0.00"
                                        value={cargoEnergia}
                                        onChange={(e) => setCargoEnergia((e.target.value))}
                                         />
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="comercializacion">Cargo de Comercializacion</label>
                                        <input type="number"
                                        step="any" 
                                        className="form-control" 
                                        id="comercializacion" 
                                        placeholder="0.00"
                                        value={cargoComer}
                                        onChange={(e) => setCargoComer((e.target.value))}
                                        />
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="energia">Cargo de distribucion</label>
                                        <input type="number"
                                        step="any" 
                                        className="form-control" 
                                        id="distribucion" 
                                        placeholder="0.00"
                                        value={distribucion}
                                        onChange={(e) => setDistribucion((e.target.value))}
                                        />
                                    </div>
                                </div><br />

                                <div className="row">
                                    <div className="col-4 form-group">
                                        <label for="energia">Tipo de Uso</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        onChange={(e) => setTipoUso(e.target.value)}>
                                            <option selected>Seleccione una opción</option>
                                            <option value="general">General</option>
                                            <option value="residencial">Residencial</option>
                                        </select>
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="consumo">Mes de Facturacion</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        onChange={(e) =>  setMesFact(e.target.value)}>
                                            <option selected>Seleccione mes de facturacion</option>
                                            <option value="2021-01-01T14:00">enero</option>
                                            <option value="2021-02-01T14:00">febrero</option>
                                            <option value="2021-03-01T14:00">marzo</option>
                                            <option value="2021-04-01T14:00">abril</option>
                                            <option value="2021-05-01T14:00">mayo</option>
                                            <option value="2021-06-01T14:00">junio</option>
                                            <option value="2021-07-01T14:00">julio</option>
                                            <option value="2021-08-01T14:00">agosto</option>
                                            <option value="2021-09-01T14:00">septiembre</option>
                                            <option value="2021-10-01T14:00">octubre</option>
                                            <option value="2021-11-01T14:00">noviembre</option>
                                            <option value="2021-12-01T14:00">diciembre</option>
                                        </select>
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="consumo">Dias de Facturacion</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        onChange={(e) =>  setDiasFact(parseInt(e.target.value))}>
                                            <option selected>Seleccione dias en factura</option>
                                            <option value="28">28</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                    
                                        </select>
                                    </div>

                                </div><br />

                                <div className="row">
                                    
                                    <div className="col-4 form-group">
                                        <label for="consumo">Multiplicador</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        onChange={(e) => setMulti(parseInt(e.target.value))}>
                                            <option selected>Seleccione una opción</option>
                                            <option value="1">1</option>
                                            <option value="1200">1200</option>
                                        </select>
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="consumo">Kwh</label>
                                        <input type="number"
                                        step="any" 
                                        className="form-control" 
                                        id="kwh" 
                                        placeholder="0.00"
                                        value={kwh}
                                        onChange={(e) => setKwh(e.target.value)} 
                                        />
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="consumo">Distribuidor</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        onChange={(e) =>  setIdDist(parseInt(e.target.value))}>
                                            <option selected>Seleccione una opcion</option>
                                            <option value="1">CAESS</option>
                                            <option value="2">DEL SUR</option>
                                            <option value="3">CLESA</option>
                                            <option value="4">EEO</option>
                                            <option value="5">DEUSEM</option>
                                            <option value="6">EDESAL</option>
                                            <option value="7">BD</option>
                                            <option value="8">ABRUZZO</option>
                                        </select>
                                    </div>

                                </div><br />

                                <div className="row">

                                    <div className="col-4 form-group">
                                        <label for="consumo">Id del ususario</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        onChange={(e) => setIdUser(parseInt(e.target.value))}>
                                            <option selected>Se va a popular con la base</option>
                                            <option value="123456">random1</option>
                                            <option value="654321">random2</option>
                                            
                                        </select>
                                    </div>

                                    <div className="col-4 form-group">
                                        <label for="correo">Correo</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="kwh" 
                                        placeholder="correo asosiado"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)} 
                                        />
                                    </div>

                                </div>

                            </div>

                            
                        </div><br /><br />

                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button type="submit" value='Save fac' className="btn btn-primary ">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}


Factura.propTypes = {
    startDate: PropTypes.string,
    endtDate: PropTypes.string,
    cargoEnergia: PropTypes.number,
    cargoComer: PropTypes.number,
    distribucion: PropTypes.number,
    tipoUso: PropTypes.string,
    mesFact: PropTypes.string,
    diasFact: PropTypes.number,
    multi: PropTypes.number,
    kwh: PropTypes.number,
    idDist: PropTypes.number,
    idUser: PropTypes.number,
    correo: PropTypes.string
}

export default Factura
