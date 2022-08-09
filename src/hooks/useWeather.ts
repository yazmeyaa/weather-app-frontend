import { appConfig } from '@config/appConfig'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { IForecastResponse } from 'types/forecastResponse'
import {
    IWeatherResponse,
    LocationType,
    WeatherValuesType,
} from 'types/weatherResponse'

export const requestPathes = {
    getWeatherByCity: `${appConfig.backendUrl}/api/get_weather`,
    getWeatherByIP: `${appConfig.backendUrl}/api/get_weather_by_ip`,
    getForecast: `${appConfig.backendUrl}/api/get_forecast`,
}

export type LoadingStateType = {
    forecast: boolean
    current: boolean
    location: boolean
}

export const useWeather = () => {
    const [weatherValues, setWeatherValues] =
        useState<WeatherValuesType | null>(null)
    const [weatherForecast, setWeatherForecast] =
        useState<IForecastResponse | null>(null)
    const [location, setLocation] = useState<LocationType | null>(null)
    const [isLoading, setIsLoading] = useState<LoadingStateType>({
        current: false,
        forecast: false,
        location: false,
    })
    const [error, setError] = useState<null | undefined | AxiosError>(null)

    const memoisedLoading = useMemo(() => {
        return { ...isLoading }
    }, [isLoading])

    /*
     * Function allows to update weather values by city name.
     * @param ${string} cityNameToSearch city name to search.
     * @return ${IWeatherResponse} weatherAPI response
     */
    const updateWeatherValuesByCity = useCallback(
        async function updateWeatherValuesByCity(cityNameToSearch: string) {
            setIsLoading(prev => {
                return { ...prev, current: true }
            })
            await axios({
                method: 'GET',
                url: requestPathes.getWeatherByCity,
                params: {
                    city: cityNameToSearch,
                },
            })
                .then((response: AxiosResponse<IWeatherResponse>) => {
                    setLocation(response.data.location)
                    setWeatherValues(response.data.current)
                    setIsLoading(prev => {
                        return { ...prev, current: false }
                    })
                })
                .catch((reasson: Error | AxiosError) => {
                    if (axios.isAxiosError(reasson)) {
                        setError(reasson)
                        setIsLoading(prev => {
                            return { ...prev, current: false }
                        })
                        console.error(reasson)
                    } else if (reasson instanceof Error) {
                        console.error(reasson.message)
                    }
                })
            setIsLoading(prev => {
                return { ...prev, current: false }
            })
        },
        []
    )

    /*
     * Function allows to update weather values by IP address.
     * @return ${IWeatherResponse} weatherAPI response
     */
    const updateWeatherValuesByIP = useCallback(async () => {
        setIsLoading(prev => {
            return { ...prev, current: true }
        })

        await axios({
            method: 'GET',
            url: requestPathes.getWeatherByIP,
        })
            .then((response: AxiosResponse<IWeatherResponse>) => {
                setLocation(response.data.location)
                setWeatherValues(response.data.current)
                setIsLoading(prev => {
                    return { ...prev, current: false }
                })
            })
            .catch((reasson: Error | AxiosError) => {
                if (axios.isAxiosError(reasson)) {
                    setError(reasson)
                    setIsLoading(prev => {
                        return { ...prev, current: false }
                    })
                    console.error(reasson)
                } else if (reasson instanceof Error) {
                    console.error(reasson.message)
                }
            })
    }, [])

    /*
     * Function allows to update weather values by coordinates, that recieved from GoogleAPIs.
     * @param ${PositionOptions} default getCurrentPosition options
     * @return ${IWeatherResponse} weatherAPI response
     */
    const updateWeatherValuesByCoords = useCallback(
        (options?: PositionOptions) => {
            setIsLoading(prev => {
                return { ...prev, current: true }
            })
            navigator.geolocation.getCurrentPosition(
                async result => {
                    await axios({
                        method: 'GET',
                        url: requestPathes.getWeatherByCity,
                        params: {
                            city: `${result.coords.latitude},${result.coords.longitude}`,
                        },
                    })
                        .then((response: AxiosResponse<IWeatherResponse>) => {
                            setIsLoading(prev => {
                                return { ...prev, current: false }
                            })
                            setWeatherValues(response.data.current)
                            setLocation(response.data.location)
                        })
                        .catch((reasson: Error | AxiosError) => {
                            if (axios.isAxiosError(reasson)) {
                                setError(reasson)
                                setIsLoading(prev => {
                                    return { ...prev, current: false }
                                })
                                console.error(reasson)
                            } else if (reasson instanceof Error) {
                                console.error(reasson.message)
                            }
                        })
                },
                error => {
                    console.error(error)
                    updateWeatherValuesByIP()
                },
                options
            )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    /*
     * Function allows to get weather forecast by city name.
     * @param ${string} cityNameToSearch is a city name to search.
     * @return ${IForecastResponse} weatherAPI response
     */

    const getForecast = useCallback(
        async (cityNameToSearch: string, days: number) => {
            setIsLoading(prev => {
                return { ...prev, forecast: true }
            })

            await axios({
                url: requestPathes.getForecast,
                method: 'GET',
                params: {
                    city: cityNameToSearch,
                    days: days,
                },
            })
                .then((data: AxiosResponse<IForecastResponse>) => {
                    setWeatherForecast(data.data)
                    setIsLoading(prev => {
                        return { ...prev, forecast: false }
                    })
                })
                .catch((reasson: Error | AxiosError) => {
                    if (axios.isAxiosError(reasson)) {
                        setError(reasson)
                        setIsLoading(prev => {
                            return { ...prev, forecast: false }
                        })
                        console.error(reasson)
                    } else if (reasson instanceof Error) {
                        console.error(reasson.message)
                    }
                })
        },
        []
    )
    useEffect(() => {
        updateWeatherValuesByCoords()
        if (location) {
            getForecast(location.name, 7)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        weatherValues,
        weatherForecast,
        location,
        isLoading,
        memoisedLoading,
        error,
        getForecast,
        updateWeatherValuesByCity,
        updateWeatherValuesByIP,
        updateWeatherValuesByCoords,
    }
}
