import React, { useState } from 'react';
import '../css/Car/Read.css';
import Car from './Car';
import { getCar, filterMarca, filterModelo, filterColor } from '../../Api/Route.js';

export default function Read(props){
	
    const [filter , setFilter] = useState('1');
    const [name, setName] = useState('')
    const [car, setCar] = useState([]);

	function handleInputChangeFilter(e){
        setFilter(e.target.value);
    }

    function handleInputChange1(e){
        setName(e.target.value);
    }


    async function handleChargeUser(event){
    	// setCar([[0],[1]])

    	if (name==="") {
    		var query = await getCar();  
	    	var result = await query.json();
	    	console.log(result)
	    	setCar(result);
    	} else {
    		if(filter === "1"){ // Color
    			var query = await filterColor(name);  
	    		var result = await query.json();
	    		setCar(result);
    			alert("Filtro por Color");
	    	setCar(result);
    		} else if(filter === "2"){ // Marca
    			
    			var query = await filterMarca(name);  
	    		var result = await query.json();
	    		setCar(result);
    			alert("Filtro por Marca");
    		} else if(filter === "3"){ // Modelo
    			
    			var query = await filterModelo(name);  
	    		var result = await query.json();
	    		setCar(result);
    			alert("Filtro por Modelo");
    		}
    	}
	    	
    	


    }


	return(
		<div className="form-user">
			<div className="container">
				<div className="row">
	                <div className="col">
	                    <button className="button-charge" onClick={handleChargeUser}>Cargar Vehiculos</button>
	                </div>
					<div className="col">
						<div className="col">
					        <select className="form-select-user" value={filter} onChange={handleInputChangeFilter}>
					            <option value="1">Filtrar por Color</option>
					            <option value="2">Filtrar por Marca</option>
					            <option value="3">Filtrar por Modelo</option>
					        </select>
                       	</div>
						<div className="col">
                       		<input className="etiqueta-user-2" type="text" value={name} 	placeholder="Marca/Modelo/Color" 	onChange={handleInputChange1}/>
                       	</div>
				    </div>
				</div>

	            <div className="row">
	                <center><h1>Vehiculos</h1></center>


                    {
                        car.map(i => {
                            return(
                                <Car 
                                    key 		= {i.id}
                                    dataPlaca 	= {i.placa} 
                                    dataMarca 	= {i.marca}
                                    dataModelo 	= {i.modelo}
                                    dataSerie 	= {i.serie}
                                    dataColor 	= {i.color}
                                />
                            )
                        })
                    }
                   
	                    
	                
	            </div>	
			</div>
				
		</div>
			
	);
}