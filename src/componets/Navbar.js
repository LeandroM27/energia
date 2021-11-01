import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import * as FaIcons from "react-icons/fa";
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a href className="navbar-brand ps-3">Electronic</a>
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a href className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaIcons.FaUserAlt/></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            {Sidebar.map((item, index) => {
                                return(
                                    <Link to={item.path}>                              
                                        <div className="nav">
                                            <a href className="nav-link" key={index}>
                                                <div className="sb-nav-link-icon">{item.icon}</div>
                                                {item.title}
                                            </a>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Sesión como:</div>
                            Usuario
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
