/* URL - Backend*/
const url_api = "http://127.0.0.1:4000";

/* ENDPOINT */
const url_getCar    = url_api + "/carro";
const url_postCar   = url_api + "/carro";
const url_updateCar = url_api + "/updateCar/";
const url_deleteCar = url_api + "/deleteCar/";
/* FILTER */
const url_filterMarca  = url_api + "/filterMarca/";
const url_filterModelo = url_api + "/filterModelo/";
const url_filterColor  = url_api + "/filterColor/";

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


export async function updateCar(_placa, _marca, _modelo, _serie, _color){ // verificar usuario

    return fetch(url_updateCar + _placa, {
        method: 'PUT',
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


export async function deleteCar(_placa){ // verificar usuario

    return fetch(url_deleteCar + _placa, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            placa: _placa
        }),
    });
}

export async function filterMarca(_marca){ // verificar usuario

    return fetch(url_filterMarca + _marca, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}

export async function filterModelo(_modelo){ // verificar usuario

    return fetch(url_filterModelo + _modelo, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}


export async function filterColor(_color){ // verificar usuario

    return fetch(url_filterColor + _color, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
}
