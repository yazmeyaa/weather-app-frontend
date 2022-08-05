import { FC } from 'react'
import { ForecastSignleDay, ForecastByHours } from 'types/forecastResponse'

interface ValuesGroupProps {
    forecastValues: ForecastSignleDay
    value: keyof ForecastByHours
}

export type valuesType = keyof ForecastByHours

export type ValuesGroupPropsType = FC<ValuesGroupProps>
