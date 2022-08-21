/* URL - Backend*/
const url_api = "http://127.0.0.1:4000";

/* ENDPOINT */
const url_getCar  = url_api + "/carro";
const url_postCar = url_api + "/carro";


export async function getCar(){
    return fetch(url_getCar, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}



export async function addCar(_placa, _marca, _modelo, _serie, _color){ // verificar usuario

    return fetch(url_postCar, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            placa: _placa,
            marca: _marca,
            modelo: _modelo,
            serie: _serie,
            color: _color
        }),
    });
}