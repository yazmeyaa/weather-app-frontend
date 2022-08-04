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
import { CardsContext } from 'store/currentCardSelected/cardsContext'

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
                                        <data>
                                            {index.toString().padStart(2, '0')}
                                            :00
                                        </data>
                                        <ValuesItem>
                                            {' '}
                                            {item.temp_c}°C
                                        </ValuesItem>
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
                                        <data>
                                            {index.toString().padStart(2, '0')}
                                            :00
                                        </data>
                                        <ValuesItem>
                                            {' '}
                                            {item.pressure_mb} mB
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
