import { Fragment, useRef, memo } from 'react'
import { weekDays } from '../helpers/weekdays'
import { ValuesItem, CardDate } from './cardCompact.styles'
import { CardCompactPropsType } from './cardCompact.types'
import { units } from '../helpers/units'
import { valueNames } from '../helpers/values'
import getIconByCode from 'components/icons'

export const CardCompact: CardCompactPropsType = memo(function CardCompact({
    values,
}) {
    const currentDate = useRef<Date>(new Date(values.date))
    return (
        <Fragment>
            <CardDate>{`${
                weekDays[currentDate.current.getDay()]
            }, ${currentDate.current.getDate()}`}</CardDate>
            <ValuesItem>
                {`${valueNames.temp_c} ${values.day.avgtemp_c} ${units.temp_c}`}
            </ValuesItem>
            <ValuesItem>
                {`${valueNames.chance_of_rain} ${values.day.daily_chance_of_rain} ${units.chance_of_rain}`}
            </ValuesItem>
            {values && getIconByCode(values.day.condition.code)}
        </Fragment>
    )
})
