import { FC } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'

interface CardsPropsInterface {
    forecastValues: ForecastSignleDay
}

export type CardsProps = FC<CardsPropsInterface>
