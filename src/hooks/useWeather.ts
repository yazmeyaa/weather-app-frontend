import { appConfig } from '@config/appConfig'
import axios, { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { IForecastResponse } from 'types/forecastResponse'
import {
    IWeatherResponse,
    LocationType,
    WeatherValuesType,
} from 'types/weatherResponse'

export const requestPathes = {
    getWeatherByCity: '/api/get_weather',
    getWeatherByIP: '/api/get_weather_by_ip',
}

export const useWeather = () => {
    const [weatherValues, setWeatherValues] =
        useState<WeatherValuesType | null>(null)
    const [weatherForecast, setWeatherForecast] =
        useState<IForecastResponse | null>(null)
    const [location, setLocation] = useState<LocationType | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    /*
     * Function allows to update weather values by city name.
     * @param ${string} cityNameToSearch city name to search.
     * @return ${IWeatherResponse} weatherAPI response
     */
    const updateWeatherValuesByCity = useCallback(
        async function updateWeatherValuesByCity(cityNameToSearch: string) {
            setIsLoading(true)
            try {
                await axios({
                    method: 'GET',
                    url: `${appConfig.backendUrl}${requestPathes.getWeatherByCity}`,
                    params: {
                        city: cityNameToSearch,
                    },
                }).then((response: AxiosResponse<IWeatherResponse>) => {
                    setLocation(response.data.location)
                    setWeatherValues(response.data.current)
                    setIsLoading(false)
                })
            } catch (error) {
                setIsLoading(false)
                console.error(error)
            } finally {
                setIsLoading(false)
            }
            setIsLoading(false)
        },
        []
    )

    /*
     * Function allows to update weather values by IP address.
     * @return ${IWeatherResponse} weatherAPI response
     */
    const updateWeatherValuesByIP = useCallback(async () => {
        setIsLoading(true)
        try {
            await axios({
                method: 'GET',
                url: `${appConfig.backendUrl}${requestPathes.getWeatherByIP}`,
            }).then((response: AxiosResponse<IWeatherResponse>) => {
                setLocation(response.data.location)
                setWeatherValues(response.data.current)
                setIsLoading(false)
            })
        } catch (error) {
            setIsLoading(false)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    /*
     * Function allows to update weather values by coordinates, that recieved from GoogleAPIs.
     * @param ${PositionOptions} default getCurrentPosition options
     * @return ${IWeatherResponse} weatherAPI response
     */
    const updateWeatherValuesByCoords = useCallback(
        (options?: PositionOptions) => {
            try {
                setIsLoading(true)
                navigator.geolocation.getCurrentPosition(
                    async result => {
                        await axios({
                            method: 'GET',
                            url: `${appConfig.backendUrl}/api/get_weather`,
                            params: {
                                city: `${result.coords.latitude},${result.coords.longitude}`,
                            },
                        }).then((response: AxiosResponse<IWeatherResponse>) => {
                            setIsLoading(false)
                            setWeatherValues(response.data.current)
                            setLocation(response.data.location)
                        })
                    },
                    updateWeatherValuesByIP,
                    options
                )
            } catch (error) {
                setIsLoading(false)
                console.error(error)
            } finally {
                setIsLoading(false)
            }
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
            setIsLoading(true)

            await axios({
                url: `${appConfig.backendUrl}/api/get_forecast`,
                method: 'GET',
                params: {
                    city: cityNameToSearch,
                    days: days,
                },
            })
                .then((data: AxiosResponse<IForecastResponse>) => {
                    setWeatherForecast(data.data)
                })
                .catch(error => {
                    console.log(error)
                })
            setIsLoading(false)
        },
        []
    )
    useEffect(() => {
        updateWeatherValuesByCoords()
        if (location) {
            getForecast(location.name, 3)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        weatherValues,
        weatherForecast,
        location,
        isLoading,
        getForecast,
        updateWeatherValuesByCity,
        updateWeatherValuesByIP,
        updateWeatherValuesByCoords,
    }
}
