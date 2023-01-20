export class MeteoModel {
    coord= {
        lon : 0,
        lat : 0
    }

    base = ''
    main= {
        temp : 0,
        feels_like : 0,
        temp_min : 0,
        temp_max : 0,
        pressure : 0,
        humidity : 0,
    }
    visibility = 0
    wind= {
        speed : 0,
        deg : 0
    }
    clouds = {
        all : ''
    }
    dt = ''
    sys = {
        type : '',
        id : 0,
        country : '',
        sunrise : 0,
        sunset : 0
    }
    timezone = ''
    id = 0
    name = ''
    cod = ''

    constructor() {
    }
}