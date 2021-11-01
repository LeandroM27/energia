import React from 'react'
import * as FaIcons from "react-icons/fa";
import DatosFactura from '../componets/DatosFactura';

const Historial = ({datosFactura}) => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4"><FaIcons.FaClipboardList/> Historial Pagos</h1>
                    <div className="row">
                        <div className="card mb-4 shadow-sm rounded">
                            <div className="card-body">
                                {<table id="myTable" className="table table-hover">
                                    <DatosFactura datosFactura={datosFactura}/>
                                </table>}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Historial