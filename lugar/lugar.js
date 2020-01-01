const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encode = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encode}`,
        timeout: 8000,
        headers: { 'X-RapidAPI-Key': '1320b54400mshfe572a57ece0116p11fb98jsn2ec042cb2fbd' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}