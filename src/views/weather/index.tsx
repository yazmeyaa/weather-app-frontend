import { WeatherValuesStore } from 'context/weatherValuesStore'
import { useWeather } from 'hooks/useWeather'
import { useContext, useLayoutEffect, useState } from 'react'
import { WeatherWrapper } from './styled'
import { WeatherCard } from './weatherCard'

export const LandingPage = () => {
    const [currentCardSelected, setCurrentCardSelected] = useState<
        number | null
    >(null)
    const {
        getForecast,
        location,
        weatherForecast,
        updateWeatherValuesByCoords,
        weatherValues,
    } = useWeather()
    const { forecastValues, weatherValues: weather } =
        useContext(WeatherValuesStore)
    useLayoutEffect(() => {
        updateWeatherValuesByCoords()
        if (weatherForecast) {
            forecastValues.setForecastValues(weatherForecast)
        }
        weather.setWeatherValues(weatherValues)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useLayoutEffect(() => {
        if (location) {
            getForecast(location.name, 3)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

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
