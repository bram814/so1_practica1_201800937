import React, {useState} from 'react';
import '../css/Car/Delete.css';
import { deleteCar } from '../../Api/Route.js';

export default function Delete(props){

	const [placa, setPlaca] = useState('');

	function handleInputChange1(e){
        setPlaca(e.target.value);
    }
    

    async function handleCreateCarr(event){
        event.preventDefault();
        
        try{    
            if(placa !== ""){
            
                var query = await deleteCar(placa);
                alert("Eliminado")

            } else {
                alert("Ingrese Placa")
            }

        } catch (e) {
            alert(e);
        }
    }


	return(
		 <>
            <form className="form-car-delete" onSubmit={handleCreateCarr}>
                <h1>Eliminar Vehiculo</h1>
                <input className="etiqueta" type="text" placeholder="Placa"  value={placa}  onChange={handleInputChange1} />
                
                <button className="boton" type="submit">Eliminar</button>
            </form>    
        
        </>  
	);
}