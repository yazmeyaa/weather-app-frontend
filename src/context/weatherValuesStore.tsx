import { createContext, ReactNode, FC, useState, Dispatch } from 'react'
import { IWeatherResponse } from 'types/weatherResponse'

interface IWaetherValuesStore {
    weatherValues: [IWeatherResponse | null, Dispatch<IWeatherResponse>] | null
    currentCity: [string | null, Dispatch<string>] | null
}

export const WeatherValuesStore = createContext<IWaetherValuesStore | null>(
    null
)

interface IWeatherValuesProvider {
    children: ReactNode
}

export const WeatherValues: FC<IWeatherValuesProvider> = ({ children }) => {
    const [weatherValues, setWeatherValues] = useState<IWeatherResponse | null>(
        null
    )
    const [currentCity, setCurrentCity] = useState<string | null>(null)

    const store: IWaetherValuesStore = {
        weatherValues: [weatherValues, setWeatherValues],
        currentCity: [currentCity, setCurrentCity],
    }

    return (
        <WeatherValuesStore.Provider value={store}>
            {children}
        </WeatherValuesStore.Provider>
    )
}
