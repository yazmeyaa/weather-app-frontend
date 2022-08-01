import { AxiosError } from 'axios'
import { FunctionComponent, ReactNode } from 'react'
import { IForecastResponse } from 'types/forecastResponse'
import { LocationType, WeatherValuesType } from 'types/weatherResponse'

type NewType = LocationType

interface WeatherValuesContextType {
    weatherForecast: IForecastResponse | null
    weatherValues: WeatherValuesType | null
    getForecast: (cityNameToSearch: string, days: number) => Promise<void>
    isLoading: boolean
    error: null | undefined | AxiosError
    location: NewType | null
    updateWeatherValuesByCity: (cityNameToSearch: string) => Promise<void>
    updateWeatherValuesByCoords: (options?: PositionOptions | undefined) => void
    updateWeatherValuesByIP: () => Promise<void>
}

interface IWeatherValuesProvider {
    children: ReactNode
}

type WeatherValuesProviderProps = FunctionComponent<IWeatherValuesProvider>

export type { WeatherValuesContextType, WeatherValuesProviderProps }
