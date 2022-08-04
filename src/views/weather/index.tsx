import { WeatherValuesStore } from 'store/weatherValues/weatherValuesStore'
import { useContext } from 'react'
import { WeatherWrapper, CardsWrapper, CityNameBlock } from './styled'
import { WeatherCard } from './weatherCard'
import { Loading } from 'components/loading/loading'
import { CardsContext } from './weatherCard/helpers/activeCardState'

export const WeatherPage = () => {
    const { weatherForecast, error } = useContext(WeatherValuesStore)
    const { currentCardSelected, setCurrentCard } = useContext(CardsContext)
    return (
        <WeatherWrapper>
            <CityNameBlock>{weatherForecast?.location.name}</CityNameBlock>
            <CardsWrapper>
                {weatherForecast ? (
                    weatherForecast.forecast.forecastday.map((item, index) => {
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
                    })
                ) : (
                    <Loading />
                )}
                {error && error.message}
            </CardsWrapper>
        </WeatherWrapper>
    )
}
