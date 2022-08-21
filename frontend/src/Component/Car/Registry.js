import React, {useState} from 'react';
import '../css/Registry.css';
import { addCar } from '../../Api/Route.js';

export default function Registry(props){

	const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [serie, setSerie] = useState('');
    const [color, setColor] = useState('');

	function handleInputChange1(e){
        setPlaca(e.target.value);
    }
    
	function handleInputChange2(e){
        setMarca(e.target.value);
    }
    function handleInputChange3(e){
        setModelo(e.target.value);
    }
    function handleInputChange4(e){
        setSerie(e.target.value);
    }
    function handleInputChange5(e){
        setColor(e.target.value);
    }
    

    async function handleCreateCarr(event){
        event.preventDefault();
        
        console.log(`Placa: ${placa} -  Marca: ${marca} - Modelo: ${modelo} - Serie: ${serie} - Color: ${color}`)
        try{    

            var query = await addCar(placa, marca, parseInt(modelo), serie, color);  
            alert("Vehiculo Registrado")
        } catch (e) {
            alert(e);
        }
    }


	return(
		 <>
            <form className="form-login-2" onSubmit={handleCreateCarr}>
                <h1>Registrar Vehiculo</h1>
                <input className="etiqueta" type="text" placeholder="Placa"  value={placa}  onChange={handleInputChange1} />
                <input className="etiqueta" type="text" placeholder="Marca"  value={marca}  onChange={handleInputChange2} />
                <input className="etiqueta" type="text" placeholder="Modelo" value={modelo} onChange={handleInputChange3} />
                <input className="etiqueta" type="text" placeholder="Serie"  value={serie}  onChange={handleInputChange4} />
                <input className="etiqueta" type="text" placeholder="Color"  value={color}  onChange={handleInputChange5} />
                
                
                <button className="boton" type="submit">Registrar</button>
            </form>    
        
        </>  
	);
}