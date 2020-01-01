const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(e => console.log(e));


// clima.getClima(40.75, -74)
//     .then(resp => {
//         console.log(resp)
//     })
//     .catch(e => console.log(e));

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const resp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${resp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }


}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });