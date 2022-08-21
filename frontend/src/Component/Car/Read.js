import React, { useState } from 'react';
import '../css/Car/Read.css';
import Car from './Car';

export default function Read(props){
	
    const [filter , setFilter] = useState('1');
    const [car, setCar] = useState([]);

	function handleInputChangeFilter(e){
        setFilter(e.target.value);
    }

    async function handleChargeUser(event){
    	// setCar([[0],[1]])
    }


	return(
		<div className="form-user">
			<div className="container">
				<div className="row">
	                <div className="col">
	                    <button className="button-charge" onClick={handleChargeUser}>Cargar Vehiculos</button>
	                </div>
					<div className="col">
				        <select className="form-select-user" value={filter} onChange={handleInputChangeFilter}>
				            <option value="1">Filtrar por Color</option>
				            <option value="2">Filtrar por Marca</option>
				            <option value="3">Filtrar por Modelo</option>
				        </select>
				    </div>
				</div>

	            <div className="row">
	                <center><h1>Vehiculos</h1></center>


                    {
                        car.map(i => {
                            return(
                                <Car 
                                    key 		= {i[0]}
                                    dataPlaca 	= {i[0]} 
                                    dataMarca 	= {i[1]}
                                    dataModelo 	= {i[2]}
                                    dataSerie 	= {i[3]}
                                    dataColor 	= {i[4]}
                                />
                            )
                        })
                    }
                   
	                    
	                
	            </div>	
			</div>
				
		</div>
			
	);
}