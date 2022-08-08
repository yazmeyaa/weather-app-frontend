import { FC } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'

interface ICards {
    values: ForecastSignleDay
}

export type CardCompactPropsType = FC<ICards>
