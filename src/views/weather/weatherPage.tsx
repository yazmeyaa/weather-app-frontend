import { stores } from 'store/'
import { memo, ReactNode, useContext } from 'react'
import {
    WeatherWrapper,
    CardsWrapper,
    CityNameBlock,
} from './weatherPage.styles'
import { CurrentWeatherCard } from './currentWeatherCard/currentWeatherCard'
import { withLoading } from 'shared/withLoadingHOC/withLoading'
import { MappedForecast } from './mappedForecast/mappedForecast'
import { Search } from './searchfield/searchfield'

export const WeatherPage = () => {
    const { weatherForecast, isLoading, location } = useContext(stores.weather)

    function checkIsLoading() {
        if (
            isLoading.current === true ||
            isLoading.forecast === true ||
            isLoading.location === true
        ) {
            return true
        } else return false
    }

    return (
        <WeatherWrapper>
            <Loading loading={checkIsLoading()}>
                <CityNameBlock>{weatherForecast?.location.name}</CityNameBlock>
                {location && <Search cityName={location.name} />}
                <CurrentWeatherCard />
                <CardsWrapper>
                    {weatherForecast && (
                        <MappedForecast weatherForecast={weatherForecast} />
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
