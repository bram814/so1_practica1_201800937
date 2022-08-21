import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ENV_HOME, ENV_REGISTRY, ENV_READ, ENV_UPDATE, ENV_DELETE } from '../Config/env'

function Navbar(props){

    const [isActivate0, setIsActivate0] = useState(false);
    const [isActivate1, setIsActivate1] = useState(false);

    return(
         <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                         <ul className="navbar-nav mx-left">

                            <li className="nav-item">
                            <Link className="nav-link active" to={ENV_HOME}>HOME</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to={ENV_REGISTRY}>Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={ENV_READ}>Read</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={ENV_UPDATE}>Update</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={ENV_DELETE}>Delete</Link>
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