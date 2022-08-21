/* URL - Backend*/
var url_api = "http://localhost:4000";

/* ENDPOINT */
var url_getCar  = url_api + "/carro";
var url_postCar = url_api + "/carro";



export async function getCar(){
    return fetch(url_getCar, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}



export async function addCar(placa, marca, modelo, serie, color){ // verificar usuario

    return fetch(url_postCar, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Placa  : placa,
            Marca  : marca,
            Modelo : modelo,
            Serie  : serie,
            Color  : color
        }),
    });
}