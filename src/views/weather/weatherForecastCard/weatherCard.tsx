import { Wrapper } from './weatherCard.styles'
import { CardFull } from './cardFull/cardFull'
import { CardCompact } from './cardCompact/cardCompact'
import { WeatherCardProps } from './weatherCard.types'
import { memo } from 'react'

export const WeatherCard: WeatherCardProps = memo(function WeatherCard({
    forecastValues,
    selected,
    onClick,
}) {
    return (
        <Wrapper onClick={onClick} selected={selected}>
            {selected ? (
                <CardFull forecastValues={forecastValues} />
            ) : (
                <CardCompact values={forecastValues} />
            )}
        </Wrapper>
    )
})
