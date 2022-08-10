import { ForecastByHours } from 'types/forecastResponse'

type keyNames = {
    // eslint-disable-next-line no-unused-vars
    [key in keyof ForecastByHours]?: string
}

export const units: keyNames = {
    chance_of_rain: '%',
    chance_of_snow: '%',
    cloud: '%',
    humidity: '%',
    dewpoint_c: '℃',
    feelslike_c: '℃',
    heatindex_c: '℃',
    temp_c: '℃',
    windchill_c: '℃',
    dewpoint_f: '°F',
    feelslike_f: '°F',
    heatindex_f: '°F',
    windchill_f: '°F',
    temp_f: '°F',
    gust_kph: 'km/h',
    wind_kph: 'km/h',
    gust_mph: 'm/h',
    wind_mph: 'm/h',
    precip_in: 'inch',
    pressure_in: 'inch',
    precip_mm: 'mm',
    pressure_mb: 'mB',
    vis_km: 'km',
    vis_miles: 'miles',
    wind_degree: '°',
}
