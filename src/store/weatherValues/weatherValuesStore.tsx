import { useWeather } from 'hooks/useWeather'
import { createContext, useEffect, useLayoutEffect, useMemo } from 'react'
import {
    WeatherValuesProviderProps,
    WeatherValuesContextType,
} from './weatherValuesStore.types'

export const WeatherValuesStore = createContext<WeatherValuesContextType>(
    {} as WeatherValuesContextType
)

export const WeatherValues: WeatherValuesProviderProps = ({ children }) => {
    const {
        weatherForecast,
        weatherValues,
        getForecast,
        isLoading,
        memoisedLoading,
        error,
        location,
        updateWeatherValuesByCity,
        updateWeatherValuesByCoords,
        updateWeatherValuesByIP,
    } = useWeather()
    useEffect(() => {
        updateWeatherValuesByCoords()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(() => {
        if (location) {
            getForecast(location.name, 3)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])
    const store: WeatherValuesContextType = useMemo(() => {
        return {
            weatherForecast,
            weatherValues,
            getForecast,
            isLoading,
            memoisedLoading,
            error,
            location,
            updateWeatherValuesByCity,
            updateWeatherValuesByCoords,
            updateWeatherValuesByIP,
        }
    }, [
        weatherForecast,
        weatherValues,
        getForecast,
        isLoading,
        memoisedLoading,
        error,
        location,
        updateWeatherValuesByCity,
        updateWeatherValuesByCoords,
        updateWeatherValuesByIP,
    ])

    return (
        <WeatherValuesStore.Provider value={store}>
            {children}
        </WeatherValuesStore.Provider>
    )
}
