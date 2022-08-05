import { Fragment, useRef } from 'react'
import { weekDays } from '../helpers/weekdays'
import { ValuesItem } from './cardCompact.styles'
import { CardCompactPropsType } from './cardCompact.types'

export const CardCompact: CardCompactPropsType = ({ values }) => {
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
