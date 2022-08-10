import { WeatherValuesType } from 'types/weatherResponse'

export type WeatherValuesNames = {
    // eslint-disable-next-line no-unused-vars
    [key in keyof WeatherValuesType]?: string
}

export type WeatherValuesKeys = keyof WeatherValuesType
