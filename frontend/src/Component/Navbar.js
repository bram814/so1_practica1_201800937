import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ENV_HOME, ENV_REGISTRY, ENV_READ, ENV_UPDATE, ENV_DELETE } from '../Config/env'
import './css/Navbar.css';

function Navbar(props){

    const [isActivate0, setIsActivate0] = useState(false);
    const [isActivate1, setIsActivate1] = useState(false);
    const [isActivate2, setIsActivate2] = useState(false);
    const [isActivate3, setIsActivate3] = useState(false);
    const [isActivate4, setIsActivate4] = useState(false);

    return(
         <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                         <ul className="navbar-nav mx-left">

                            <li className="nav-item">
                            <Link  
                                className={`nav-link ${ isActivate0 ? "active nav-activate" : "active"}`} 
                                to={ENV_HOME} 
                                onClick={ () => {
                                    setIsActivate0(true);
                                    setIsActivate1(false);
                                    setIsActivate2(false);
                                    setIsActivate3(false);
                                    setIsActivate4(false);
                                }}  
                            > HOME </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link 
                                className={`nav-link ${ isActivate1 ? "active nav-activate" : "active"}`} 
                                to={ENV_REGISTRY}

                                onClick={ () => {
                                    setIsActivate0(false);
                                    setIsActivate1(true);
                                    setIsActivate2(false);
                                    setIsActivate3(false);
                                    setIsActivate4(false);
                                }} 
                                > Create </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ isActivate2 ? "active nav-activate" : "active"}`} 
                                    to={ENV_READ}
                                    onClick={ () => {
                                        setIsActivate0(false);
                                        setIsActivate1(false);
                                        setIsActivate2(true);
                                        setIsActivate3(false);
                                        setIsActivate4(false);
                                    }} 
                                >Read</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ isActivate3 ? "active nav-activate" : "active"}`} 
                                    to={ENV_UPDATE}
                                    onClick={ () => {
                                        setIsActivate0(false);
                                        setIsActivate1(false);
                                        setIsActivate2(false);
                                        setIsActivate3(true);
                                        setIsActivate4(false);
                                    }} 
                                >Update</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${ isActivate4 ? "active nav-activate" : "active"}`} 
                                    to={ENV_DELETE}
                                    onClick={ () => {
                                        setIsActivate0(false);
                                        setIsActivate1(false);
                                        setIsActivate2(false);
                                        setIsActivate3(false);
                                        setIsActivate4(true);
                                    }} 
                                >Delete</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <center>
            <h>________________________________________________________________________________________________________________________________________________________________________________________</h>
            </center>
            <br />
                    
        </> 
    );

    

}

export default Navbar;