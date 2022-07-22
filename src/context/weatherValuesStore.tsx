import { createContext, ReactNode, FC, useState, Dispatch } from 'react'
import { IForecastResponse } from 'types/forecastResponse'
import { IWeatherResponse } from 'types/weatherResponse'

interface WeatherValuesContextType {
    weatherValues: {
        values: IWeatherResponse | null
        setWeatherValues: Dispatch<IWeatherResponse>
    }
    forecastValues: {
        values: IForecastResponse | null
        setForecastValues: Dispatch<IForecastResponse>
    }
}

export const WeatherValuesStore = createContext<WeatherValuesContextType>(
    {} as WeatherValuesContextType
)

interface IWeatherValuesProvider {
    children: ReactNode
}

export const WeatherValues: FC<IWeatherValuesProvider> = ({ children }) => {
    const [weatherValues, setWeatherValues] = useState<IWeatherResponse | null>(
        null
    )
    const [currentForecast, setCurrentForecast] =
        useState<IForecastResponse | null>(null)

    const store: WeatherValuesContextType = {
        weatherValues: {
            setWeatherValues: setWeatherValues,
            values: weatherValues,
        },
        forecastValues: {
            values: currentForecast,
            setForecastValues: setCurrentForecast,
        },
    }

    return (
        <WeatherValuesStore.Provider value={store}>
            {children}
        </WeatherValuesStore.Provider>
    )
}
