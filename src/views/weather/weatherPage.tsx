import { stores } from 'store/'
import { memo, ReactNode, useContext } from 'react'
import {
    WeatherWrapper,
    CardsWrapper,
    CityNameBlock,
} from './weatherPage.styles'
import { WeatherCard } from './weatherForecastCard/weatherCard'
import { CurrentWeatherCard } from './currentWeatherCard/currentWeatherCard'
import { withLoading } from 'shared/withLoadingHOC/withLoading'

export const WeatherPage = () => {
    const { weatherForecast, isLoading } = useContext(stores.weather)
    const { currentCardSelected, setCurrentCard } = useContext(stores.cards)

    return (
        <WeatherWrapper>
            <Loading
                loading={
                    isLoading.current ||
                    isLoading.forecast ||
                    isLoading.location
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

const Loading = memo(
    withLoading(({ children }: { children: ReactNode }) => {
        return <>{children}</>
    })
)
