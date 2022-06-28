import { appConfig } from "@config/appConfig"
import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { IWeatherResponse, IWeatherValues } from "types/weatherResponse"

export enum requestPathes {
    getWeatherByCity = '/api/get_weather',
    getWeatherByIP = '/api/get_weather_by_ip'
}

export const useLocation = () => {
    const [weatherValues, setWeatherValues] = useState<IWeatherValues>()
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

    return { weatherValues, cityName, isLoading, updateWeatherValuesByCity, updateWeatherValuesByIP, updateWeatherValuesByCoords, requestPathes }
}