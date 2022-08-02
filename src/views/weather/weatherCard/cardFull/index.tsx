import React, { FC, useContext, useRef } from 'react'
import { ForecastSignleDay } from 'types/forecastResponse'
import {
    CurrentDate,
    Wrapper,
    CloseButton,
    ValuesItem,
    ValuesGroups,
    GroupItemWrapper,
    GroupName,
    GroupWrapper,
    GroupsWrapper,
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
            <GroupsWrapper>
                <ValuesGroups>
                    <GroupName>Temperature</GroupName>
                    <GroupWrapper>
                        {forecastValues &&
                            forecastValues.hour.map((item, index) => {
                                return (
                                    <GroupItemWrapper key={index}>
                                        <data>{index}h</data>
                                        <ValuesItem> {item.temp_c}</ValuesItem>
                                    </GroupItemWrapper>
                                )
                            })}
                    </GroupWrapper>
                </ValuesGroups>
                <ValuesGroups>
                    <GroupName>Pressure</GroupName>
                    <GroupWrapper>
                        {forecastValues &&
                            forecastValues.hour.map((item, index) => {
                                return (
                                    <GroupItemWrapper key={index}>
                                        <data>{index}h</data>
                                        <ValuesItem>
                                            {' '}
                                            {item.pressure_mb}
                                        </ValuesItem>
                                    </GroupItemWrapper>
                                )
                            })}
                    </GroupWrapper>
                </ValuesGroups>
            </GroupsWrapper>
        </Wrapper>
    )
}
