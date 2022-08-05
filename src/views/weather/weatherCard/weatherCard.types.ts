import { FC, MouseEventHandler } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'

interface IWeatherCardProps {
    forecastValues: ForecastSignleDay
    selected: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}

export type WeatherCardProps = FC<IWeatherCardProps>
