import { ForecastByHours } from 'types/forecastResponse'

type keyNames = {
    // eslint-disable-next-line no-unused-vars
    [key in keyof ForecastByHours]?: string
}

export const valueNames: keyNames = {
    chance_of_rain: 'Chance of rain',
    chance_of_snow: 'Chance of snow',
    cloud: 'Cloudiness',
    dewpoint_c: 'Dew point',
    dewpoint_f: 'Dew point',
    condition: 'Condition',
    feelslike_c: 'Feels like',
    feelslike_f: 'Feels like',
    gust_kph: 'Gust',
    gust_mph: 'Gust',
    heatindex_c: 'Heat index',
    heatindex_f: 'Heat index',
    humidity: 'Humidity',
    is_day: 'Is day',
    precip_in: 'Precipitation',
    precip_mm: 'Precipitation',
    pressure_in: 'Pressure',
    pressure_mb: 'Pressure',
    temp_c: 'Temperature',
    temp_f: 'Temperature',
    time: 'Time',
    time_epoch: 'Time',
    uv: 'UV index',
    vis_km: 'Visibility',
    vis_miles: 'Visibility',
    will_it_rain: 'Rain',
    will_it_snow: 'Snow',
    wind_degree: 'Wind direction',
    wind_dir: 'Wind direction',
    wind_kph: 'Wind speed',
    wind_mph: 'Wind speed',
    windchill_c: 'Wind',
    windchill_f: 'Wind',
}
