import { WeatherValuesStore } from 'store/weatherValuesStore'
import { useContext, useState } from 'react'
import { WeatherWrapper } from './styled'
import { WeatherCard } from './weatherCard'
import { Loading } from 'components/loading/loading'

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
                <Loading />
            )}
        </WeatherWrapper>
    )
}
