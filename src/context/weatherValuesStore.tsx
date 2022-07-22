import { useWeather } from 'hooks/useWeather'
import { createContext, ReactNode, FC, useEffect, useLayoutEffect } from 'react'
import { IForecastResponse } from 'types/forecastResponse'
import { LocationType, WeatherValuesType } from 'types/weatherResponse'

interface WeatherValuesContextType {
    weatherForecast: IForecastResponse | null
    weatherValues: WeatherValuesType | null
    getForecast: (cityNameToSearch: string, days: number) => Promise<void>
    isLoading: boolean
    location: LocationType | null
    updateWeatherValuesByCity: (cityNameToSearch: string) => Promise<void>
    updateWeatherValuesByCoords: (options?: PositionOptions | undefined) => void
    updateWeatherValuesByIP: () => Promise<void>
}

export const WeatherValuesStore = createContext<WeatherValuesContextType>(
    {} as WeatherValuesContextType
)

interface IWeatherValuesProvider {
    children: ReactNode
}

export const WeatherValues: FC<IWeatherValuesProvider> = ({ children }) => {
    const {
        weatherForecast,
        weatherValues,
        getForecast,
        isLoading,
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
    const store: WeatherValuesContextType = {
        weatherForecast,
        weatherValues,
        getForecast,
        isLoading,
        location,
        updateWeatherValuesByCity,
        updateWeatherValuesByCoords,
        updateWeatherValuesByIP,
    }

    return (
        <WeatherValuesStore.Provider value={store}>
            {children}
        </WeatherValuesStore.Provider>
    )
}
