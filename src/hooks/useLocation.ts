import { appConfig } from "@config/appConfig"
import axios, { AxiosResponse } from "axios"
import { useCallback, useState } from "react"
import { IForecastResponse } from 'types/forecastResponse'
import { IWeatherResponse, WeatherValuesType } from "types/weatherResponse"

export enum requestPathes {
    getWeatherByCity = '/api/get_weather',
    getWeatherByIP = '/api/get_weather_by_ip'
}

export const useWeather = () => {
    const [weatherValues, setWeatherValues] = useState<WeatherValuesType>()
    const [weatherForecast, setWeatherForecast] = useState<IForecastResponse>()
    const [cityName, setCityName] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    async function updateWeatherValuesByCity(cityNameToSearch: string) {
        setIsLoading(true)
        const valuesFromBackend: AxiosResponse<IWeatherResponse, null> = await axios({
            method: 'GET',
            url: `${appConfig.backendUrl}${requestPathes.getWeatherByCity}`,
            params: {
                city: cityNameToSearch
            }
        })
        setIsLoading(false)

        if (valuesFromBackend.status === 200) {
            setCityName(valuesFromBackend.data.location.name)
            setWeatherValues(valuesFromBackend.data.current)

        } else if (valuesFromBackend.status > 400) {
            console.log('error(')
        }
    }

    async function updateWeatherValuesByIP() {
        setIsLoading(true)
        const valuesFromBackend: AxiosResponse<IWeatherResponse, null> = await axios({
            method: 'GET',
            url: `${appConfig.backendUrl}${requestPathes.getWeatherByIP}`
        })
        setIsLoading(false)

        if (valuesFromBackend.status === 200) {
            setCityName(valuesFromBackend.data.location.name)
            setWeatherValues(valuesFromBackend.data.current)

        } else if (valuesFromBackend.status > 400) {
            console.log('error(')
        }
    }

    async function updateWeatherValuesByCoords(highAccuracy: boolean) {
        setIsLoading(true)
        navigator.geolocation.getCurrentPosition(async (result) => {
            const valuesFromBackend: AxiosResponse<IWeatherResponse, null> = await axios({
                method: 'GET',
                url: `${appConfig.backendUrl}/api/get_weather`,
                params: {
                    city: `${result.coords.latitude},${result.coords.longitude}`
                }
            })
            setIsLoading(false)

            if (valuesFromBackend.status === 200) {
                const values = valuesFromBackend.data.current
                setCityName(valuesFromBackend.data.location.name)
                setWeatherValues(values)

            } else if (valuesFromBackend.status > 400) {
                console.error('Неправильное имя города')
            }

        }, _ => {
            updateWeatherValuesByIP()
        }, {
            enableHighAccuracy: highAccuracy
        })
    }

    const getForecast = useCallback(async (cityNameToSearch: string, days: number) => {
        setIsLoading(true)

        await axios({
            url: `${appConfig.backendUrl}/api/get_forecast`,
            method: 'GET',
            params: {
                city: cityNameToSearch,
                days: days
            }

        })
            .then((data: AxiosResponse<IForecastResponse>) => {
                setWeatherForecast(data.data)
            })
            .catch(error => {
                console.log(error)
            })
        setIsLoading(false)
    }, [])


    return { weatherValues, weatherForecast, cityName, isLoading, getForecast, updateWeatherValuesByCity, updateWeatherValuesByIP, updateWeatherValuesByCoords, requestPathes }
}