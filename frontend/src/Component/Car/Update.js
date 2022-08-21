import React, {useState} from 'react';
import '../css/Car/Update.css';
import { updateCar } from '../../Api/Route';

export default function Update(props){

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
        
        try{    

            if(placa === ""){
                alert("Debe de ingresar una placa")
            } else{
                var newModelo;
                if(modelo === ''){
                    newModelo = -1;
                }else {
                    newModelo = parseInt(modelo);
                }
                console.log(`Placa: ${placa} -  Marca: ${marca} - Modelo: ${newModelo} - Serie: ${serie} - Color: ${color}`)
        

                var query = await updateCar(placa, marca, newModelo, serie, color);
                alert("Modificado")
            }

        } catch (e) {
            alert(e);
        }
    }


	return(
		 <>
            <form className="form-car-update" onSubmit={handleCreateCarr}>
                <h1>Actualizar Vehiculo</h1>
                <input className="etiqueta" type="text" placeholder="Placa"  value={placa}  onChange={handleInputChange1} />
                <input className="etiqueta" type="text" placeholder="Marca"  value={marca}  onChange={handleInputChange2} />
                <input className="etiqueta" type="text" placeholder="Modelo" value={modelo} onChange={handleInputChange3} />
                <input className="etiqueta" type="text" placeholder="Serie"  value={serie}  onChange={handleInputChange4} />
                <input className="etiqueta" type="text" placeholder="Color"  value={color}  onChange={handleInputChange5} />
                
                
                <button className="boton" type="submit">Actualizar</button>
            </form>    
        
        </>  
	);
}