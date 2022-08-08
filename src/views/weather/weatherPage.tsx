import { WeatherValuesStore } from 'store/weatherValues/weatherValuesStore'
import { ReactNode, useContext, useEffect } from 'react'
import {
    WeatherWrapper,
    CardsWrapper,
    CityNameBlock,
} from './weatherPage.styles'
import { WeatherCard } from './weatherForecastCard/weatherCard'
import { CardsContext } from 'store/currentCardSelected/cardsContext'
import { CurrentWeatherCard } from './currentWeatherCard/currentWeatherCard'
import { withLoading } from 'helpers/withLoadingHOC/withLoading'

export const WeatherPage = () => {
    const { weatherForecast, memoisedLoading } = useContext(WeatherValuesStore)
    const { currentCardSelected, setCurrentCard } = useContext(CardsContext)
    useEffect(() => {
        console.log(memoisedLoading)
    }, [memoisedLoading])

    return (
        <WeatherWrapper>
            <Loading
                loading={
                    memoisedLoading.current ||
                    memoisedLoading.forecast ||
                    memoisedLoading.location
                }
            >
                <CityNameBlock>{weatherForecast?.location.name}</CityNameBlock>
                <CurrentWeatherCard />
                <CardsWrapper>
                    {weatherForecast &&
                        weatherForecast.forecast.forecastday.map(
                            (item, index) => {
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
                            }
                        )}
                </CardsWrapper>
            </Loading>
        </WeatherWrapper>
    )
}

const Loading = withLoading(({ children }: { children: ReactNode }) => {
    return <>{children}</>
})
