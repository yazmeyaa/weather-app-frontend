import { useContext } from 'react'
import { stores } from 'store'
import { IForecastResponse } from 'types/forecastResponse'
import { WeatherCard } from '../weatherForecastCard/weatherCard'

export const MappedForecast = ({
    weatherForecast,
}: {
    weatherForecast: IForecastResponse
}) => {
    const { currentCardSelected, setCurrentCard } = useContext(stores.cards)
    return (
        <>
            {weatherForecast.forecast.forecastday.map((item, index) => {
                return (
                    <WeatherCard
                        onClick={() => {
                            setCurrentCard(index)
                        }}
                        selected={currentCardSelected === index}
                        forecastValues={item}
                        key={index}
                    />
                )
            })}
        </>
    )
}
