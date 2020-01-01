const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e7f1613c0738c6cf89089582f087873&units=metric`)

    return resp.data.main.temp;
}



module.exports = {
    getClima
}