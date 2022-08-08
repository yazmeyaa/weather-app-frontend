import { WeatherValuesStore } from 'store/weatherValues/weatherValuesStore'
import { useContext } from 'react'
import {
    WeatherWrapper,
    CardsWrapper,
    CityNameBlock,
} from './weatherPage.styles'
import { WeatherCard } from './weatherForecastCard/weatherCard'
import { Loading } from 'components/loading/loading'
import { CardsContext } from 'store/currentCardSelected/cardsContext'
import { CurrentWeatherCard } from './currentWeatherCard/currentWeatherCard'

export const WeatherPage = () => {
    const { weatherForecast } = useContext(WeatherValuesStore)
    const { currentCardSelected, setCurrentCard } = useContext(CardsContext)
    return (
        <WeatherWrapper>
            <CityNameBlock>{weatherForecast?.location.name}</CityNameBlock>
            <CurrentWeatherCard />
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
            </CardsWrapper>
        </WeatherWrapper>
    )
}
