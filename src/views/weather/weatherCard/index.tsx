import { Wrapper } from './styled'
import { ForecastSignleDay } from 'types/forecastResponse'
import { FC, MouseEventHandler } from 'react'
import { CardFull } from './cardFull'
import { CardCompact } from './cardCompact'
interface IWeatherCardProps {
    forecastValues: ForecastSignleDay
    selected: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}

export const WeatherCard: FC<IWeatherCardProps> = ({
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
