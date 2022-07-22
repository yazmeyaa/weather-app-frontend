import { WeatherValuesStore } from 'context/weatherValuesStore'
import { FC, useContext, useRef } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'
import { CurrentDate, CurrentTemp, ValuesItem, Wrapper } from './styled'

interface ICards {
    forecastValues: ForecastSignleDay
}

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export const CardFull: FC<ICards> = () => {
    const currentDate = useRef<Date>(new Date())
    const { forecastValues } = useContext(WeatherValuesStore)
    return (
        <Wrapper>
            <CurrentDate>{weekDays[currentDate.current.getDay()]}</CurrentDate>
            <CurrentTemp>
                Avarage temp:{' '}
                {forecastValues.values && forecastValues.values.current.temp_c}
            </CurrentTemp>
            <ValuesItem>
                Chance of rain:{' '}
                {forecastValues.values &&
                    forecastValues.values.day.daily_chance_of_rain}
            </ValuesItem>
            <ValuesItem>
                Humidity:{' '}
                {forecastValues.values && forecastValues.values.day.avghumidity}
                %
            </ValuesItem>
            <ValuesItem>
                Precipitation:{' '}
                {forecastValues.values &&
                    forecastValues.values.day.totalprecip_mm}{' '}
                mmHg
            </ValuesItem>
            <ValuesItem>
                UV index:{' '}
                {forecastValues.values && forecastValues.values.day.uv}
            </ValuesItem>
        </Wrapper>
    )
}
