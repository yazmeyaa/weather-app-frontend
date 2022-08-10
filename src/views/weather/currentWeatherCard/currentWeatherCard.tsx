import { useContext, useState } from 'react'
import { WeatherValuesStore } from 'store/weatherValues/weatherValuesStore'
import {
    Wrapper,
    ValueName,
    ValueContainer,
    ValuesGroup,
} from './currentWeatherCard.styles'
import { weatherValuesNames } from './helpers/names'
import { unitsNames } from './helpers/units'
import { WeatherValuesKeys } from './helpers/values.types'

export const CurrentWeatherCard = () => {
    const [valuseToRender] = useState<Array<WeatherValuesKeys>>([
        'temp_c',
        'humidity',
        'wind_kph',
    ])
    const { weatherValues } = useContext(WeatherValuesStore)

    function displayValue(valueName: WeatherValuesKeys) {
        if (!weatherValues) {
            return 'Cant get values.'
        }
        return `${weatherValuesNames[valueName]} ${weatherValues[valueName]} ${unitsNames[valueName]} `
    }
    return (
        <Wrapper>
            <ValuesGroup>
                <ValueContainer>
                    {weatherValues &&
                        valuseToRender.map((item, index) => {
                            return (
                                <ValueName key={index}>
                                    {displayValue(item)}
                                </ValueName>
                            )
                        })}
                </ValueContainer>
            </ValuesGroup>
        </Wrapper>
    )
}
