import { FC, Fragment, useRef } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'
import { ValuesItem } from './styled'

interface ICards {
    values: ForecastSignleDay
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

export const CardCompact: FC<ICards> = ({ values }) => {
    const currentDate = useRef<Date>(new Date(values.date))
    return (
        <Fragment>
            {weekDays[currentDate.current.getDay()]}
            <ValuesItem>Avarage temp: {values.day.avgtemp_c}</ValuesItem>
            <ValuesItem>
                Chance of rain: {values.day.daily_chance_of_rain}
            </ValuesItem>
        </Fragment>
    )
}
