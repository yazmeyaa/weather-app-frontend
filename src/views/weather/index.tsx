import { WeatherValuesStore } from 'context/weatherValuesStore'
import { useContext, useState } from 'react'
import { WeatherWrapper } from './styled'
import { WeatherCard } from './weatherCard'

export const LandingPage = () => {
    const [currentCardSelected, setCurrentCardSelected] = useState<
        number | null
    >(null)
    const { weatherForecast } = useContext(WeatherValuesStore)

    function handleClickEvent(number: number) {
        setCurrentCardSelected(number)
    }
    return (
        <WeatherWrapper>
            {weatherForecast ? (
                weatherForecast.forecast.forecastday.map((item, index) => {
                    return (
                        <WeatherCard
                            onClick={() => {
                                handleClickEvent(index)
                            }}
                            selected={currentCardSelected === index}
                            forecastValues={item}
                            key={index}
                        />
                    )
                })
            ) : (
                <h1>loading...</h1>
            )}
        </WeatherWrapper>
    )
}
