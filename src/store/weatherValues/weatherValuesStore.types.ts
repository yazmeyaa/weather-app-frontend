import { AxiosError } from 'axios'
import { LoadingStateType } from 'hooks/useWeather'
import { FunctionComponent, ReactNode } from 'react'
import { IForecastResponse } from 'types/forecastResponse'
import { LocationType, WeatherValuesType } from 'types/weatherResponse'

interface WeatherValuesContextType {
    weatherForecast: IForecastResponse | null
    weatherValues: WeatherValuesType | null
    getForecast: (cityNameToSearch: string, days: number) => Promise<void>
    isLoading: LoadingStateType
    memoisedLoading: LoadingStateType
    error: null | undefined | AxiosError
    location: LocationType | null
    updateWeatherValuesByCity: (cityNameToSearch: string) => Promise<void>
    updateWeatherValuesByCoords: (options?: PositionOptions | undefined) => void
    updateWeatherValuesByIP: () => Promise<void>
}

interface IWeatherValuesProvider {
    children: ReactNode
}

type WeatherValuesProviderProps = FunctionComponent<IWeatherValuesProvider>

export type { WeatherValuesContextType, WeatherValuesProviderProps }
