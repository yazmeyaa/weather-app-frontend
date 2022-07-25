import { WeatherValuesStore } from 'store/weatherValuesStore'
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

export const CardFull: FC<ICards> = ({ forecastValues }) => {
    const currentDate = useRef<Date>(new Date(forecastValues.date))
    const { weatherValues } = useContext(WeatherValuesStore)
    return (
        <Wrapper>
            <CurrentDate>
                {weekDays[currentDate.current.getDay()]}{' '}
                {currentDate.current.getDate()}{' '}
            </CurrentDate>
            <CurrentTemp>
                Current temp: {weatherValues && weatherValues.temp_c}
            </CurrentTemp>
            <ValuesItem>
                Chance of rain:{' '}
                {forecastValues && forecastValues.day.daily_chance_of_rain}
            </ValuesItem>
            <ValuesItem>
                Humidity: {forecastValues && forecastValues.day.avghumidity}%
            </ValuesItem>
            <ValuesItem>
                Precipitation:{' '}
                {forecastValues && forecastValues.day.totalprecip_mm} mmHg
            </ValuesItem>
            <ValuesItem>
                UV index: {forecastValues && forecastValues.day.uv}
            </ValuesItem>
        </Wrapper>
    )
}
