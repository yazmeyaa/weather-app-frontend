import { WeatherValuesType } from 'types/weatherResponse'
import { weatherValuesNames } from '../helpers/names'
import { unitsNames } from '../helpers/units'
import { WeatherValuesKeys } from '../helpers/values.types'

export function displayValue(
    weatherValues: WeatherValuesType,
    valueName: WeatherValuesKeys
) {
    if (!weatherValues) {
        return 'Cant get values.'
    }
    return `${weatherValuesNames[valueName]} ${weatherValues[valueName]} ${unitsNames[valueName]} `
}
