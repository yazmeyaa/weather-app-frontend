import { Icon } from 'components/SVG/SVGIcon'
import { useContext, useState } from 'react'
import { WeatherValuesStore } from 'store/weatherValues/weatherValuesStore'
import {
    Wrapper,
    ValueName,
    ValueContainer,
    ValuesGroup,
    BackgroundBlur,
} from './currentWeatherCard.styles'
import { displayValue } from './functions/displayValues'
import { WeatherValuesKeys } from './helpers/values.types'

export const CurrentWeatherCard = () => {
    const [valuseToRender] = useState<Array<WeatherValuesKeys>>([
        'temp_c',
        'humidity',
        'wind_kph',
    ])
    const { weatherValues } = useContext(WeatherValuesStore)

    return (
        <Wrapper>
            <BackgroundBlur>
                <ValuesGroup>
                    <ValueContainer>
                        {weatherValues &&
                            valuseToRender.map((item, index) => {
                                return (
                                    <ValueName key={index}>
                                        {displayValue(weatherValues, item)}
                                    </ValueName>
                                )
                            })}
                    </ValueContainer>
                </ValuesGroup>
                <Icon
                    name="Sun"
                    oncompleted={(name, elem) => {
                        console.log(name, elem)
                    }}
                />
            </BackgroundBlur>
        </Wrapper>
    )
}
