import { Wrapper } from './weatherCard.styles'
import { CardFull } from './cardFull/cardFull'
import { CardCompact } from './cardCompact/cardCompact'
import { WeatherCardProps } from './weatherCard.types'

export const WeatherCard: WeatherCardProps = ({
    forecastValues,
    selected,
    onClick,
}) => {
    return (
        <Wrapper onClick={onClick} selected={selected}>
            {selected ? (
                <CardFull forecastValues={forecastValues} />
            ) : (
                <CardCompact values={forecastValues} />
            )}
        </Wrapper>
    )
}
