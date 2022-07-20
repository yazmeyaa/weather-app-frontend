import { Wrapper, ValuesItem } from './styled'
import { ForecastSignleDay } from 'types/forecastResponse'
import { FC, Fragment, MouseEventHandler } from 'react'

interface IWeatherCardProps {
    values: ForecastSignleDay
    selected: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}

export const WeatherCard: FC<IWeatherCardProps> = ({
    values,
    selected,
    onClick,
}) => {
    return (
        <Wrapper onClick={onClick} selected={selected}>
            {selected ? (
                <MegaCard values={values} />
            ) : (
                <MiniCard values={values} />
            )}
        </Wrapper>
    )
}

interface ICards {
    values: ForecastSignleDay
}

const MiniCard: FC<ICards> = ({ values }) => {
    return (
        <Fragment>
            <ValuesItem>Avarage temp: {values.day.avgtemp_c}</ValuesItem>
            <ValuesItem>
                Chance of rain: {values.day.daily_chance_of_rain}
            </ValuesItem>
        </Fragment>
    )
}

const MegaCard: FC<ICards> = ({ values }) => {
    return (
        <Fragment>
            <ValuesItem>Avarage temp: {values.day.avgtemp_c}</ValuesItem>
            <ValuesItem>
                Chance of rain: {values.day.daily_chance_of_rain}
            </ValuesItem>
            <ValuesItem>Humidity: {values.day.avghumidity}%</ValuesItem>
            <ValuesItem>
                Precipitation: {values.day.totalprecip_mm}mmHg
            </ValuesItem>
            <ValuesItem>UV index: {values.day.uv}</ValuesItem>
        </Fragment>
    )
}
