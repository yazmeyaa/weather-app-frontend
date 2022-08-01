import { WeatherValuesStore } from 'store/weatherValuesStore'
import { useContext, useLayoutEffect } from 'react'
import { WeatherWrapper } from './styled'
import { WeatherCard } from './weatherCard'
import { Loading } from 'components/loading/loading'
import { CardsContext } from './weatherCard/helpers/activeCardState'

export const LandingPage = () => {
    const { weatherForecast } = useContext(WeatherValuesStore)
    const { currentCardSelected, setCurrentCard } = useContext(CardsContext)

    useLayoutEffect(() => {
        console.log(currentCardSelected ?? null)
    }, [currentCardSelected])

    return (
        <WeatherWrapper>
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
        </WeatherWrapper>
    )
}
