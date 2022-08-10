import React, { memo, useContext, useRef } from 'react'
import {
    CurrentDate,
    Wrapper,
    CloseButton,
    GroupsWrapper,
} from './cardFull.styles'
import { ValuesGroup } from './ValuesGroup/valuesGroup'
import { CardsProps } from './cardFull.types'
import { weekDays } from '../helpers/weekdays'
import { valuesType } from './ValuesGroup/valuesGroup.types'
import { stores } from 'store'

export const CardFull: CardsProps = memo(function CardFull({ forecastValues }) {
    const currentDate = useRef<Date>(new Date(forecastValues.date))
    const { setCurrentCard } = useContext(stores.cards)

    const date = `${
        weekDays[currentDate.current.getDay()]
    } ${currentDate.current.getDate()}`

    const displayedValues: Array<valuesType> = [
        'temp_c',
        'cloud',
        'chance_of_rain',
        'feelslike_c',
    ]

    function handleCloseEvent(event: React.MouseEvent) {
        event.stopPropagation()
        setCurrentCard(null)
    }
    return (
        <Wrapper>
            <CloseButton onClick={handleCloseEvent}>X</CloseButton>
            <CurrentDate>{date}</CurrentDate>
            <GroupsWrapper>
                {displayedValues.map((item, index) => {
                    return (
                        <ValuesGroup
                            forecastValues={forecastValues}
                            value={item}
                            key={index}
                        />
                    )
                })}
            </GroupsWrapper>
        </Wrapper>
    )
})
