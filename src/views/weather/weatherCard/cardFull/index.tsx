import { WeatherValuesStore } from 'store/weatherValuesStore'
import React, { FC, useContext, useRef } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'
import {
    CurrentDate,
    CurrentTemp,
    ValuesItem,
    Wrapper,
    CloseButton,
} from './styled'
import { CardsContext } from '../helpers/activeCardState'

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
    const { setCurrentCard } = useContext(CardsContext)

    function handleCloseEvent(event: React.MouseEvent) {
        event.preventDefault()
        event.stopPropagation()
        setCurrentCard(null)
    }
    return (
        <Wrapper>
            <CloseButton onClick={handleCloseEvent}>X</CloseButton>
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
