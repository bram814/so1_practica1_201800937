import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { updateCar, deleteCar } from '../../Api/Route';

export default function Car(props){

	const [placa, setPlaca] = useState(props.dataPlaca);
    const [marca, setMarca] = useState(props.dataMarca);
    const [modelo, setModelo] = useState(props.dataModelo);
    const [serie, setSerie] = useState(props.dataSerie);
    const [color, setColor] = useState(props.dataColor);

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
    
    
    async function handleEdit(e){
        e.preventDefault();

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


    async function handleDelete(e){
        e.preventDefault();
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

		 <div>
            <div className='form-user'>
                <div className="row">
                    <div className="col">
                        <table className="form-table" border="2"  cellSpacing="1" align="center">
                        	<thead>
                                <tr>
                                    <th align="center">Placa</th>
                                    <th align="center">Marca</th>
                                    <th align="center">Modelo</th>
                                    <th align="center">Serie</th>
                                    <th align="center">Color</th>
                                    <th align="center"></th>

                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td>
                                        <input className="etiqueta-user" type="text" value={placa} 	placeholder={props.dataPlaca} 	onChange={handleInputChange1}/>
                                    </td>
                                    <td>
                                        <input className="etiqueta-user" type="text" value={marca} 	placeholder={props.dataMarca} 	onChange={handleInputChange2} />
                                    </td>
                                    <td>
                                        <input className="etiqueta-user" type="text" value={modelo} placeholder={props.dataModelo} 	onChange={handleInputChange3} />
                                    </td>
                                    <td>
                                        <input className="etiqueta-user" type="text" value={serie}	placeholder={props.dataSerie} 	onChange={handleInputChange4} />
                                    </td>
                                    <td>
                                        <input className="etiqueta-user" type="text" value={color} 	placeholder={props.dataColor} 	onChange={handleInputChange5} />
                                    </td>
                                 

                                    <td>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <button className="button-edit" onClick={handleEdit}>Editar</button>
                                                </div>
                                                <div className="col">
                                                    <button className="button-delete" onClick={handleDelete}>Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
	);
}