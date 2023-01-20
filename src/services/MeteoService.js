const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'c06516a3bb199bb320181c589f72433c'

let HTTpHeaders = new Headers()
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    cache: 'default',
    mode: 'cors'
};
class MeteoService {
    getMeteoByVille = async (ville) => {
        return await fetch(`${url}?q=${ville}&appid=${apiKey}&lang=fr&units=metric`, init).then(res => res.json())
    }

    getMeteoByLocalisation = async (lon, lat) => {
        return await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=fr&units=metric`,init).then(res => res.json())
    }
}

export const meteoService = Object.freeze(new MeteoService())