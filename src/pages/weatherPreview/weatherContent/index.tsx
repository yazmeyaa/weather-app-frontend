import React, { useEffect, useLayoutEffect, useState } from 'react'
import { CurrentWeatherBlock, PageContentBlock } from './styled'
import { WeatherPreview } from './weatherPreview'
import { ForecastBlock } from './forecastBlock/index'
import { useWeather } from 'hooks/useLocation'
import { Icon } from './icon'
import { getSVGByCode } from 'components/conditionIcons'


export const WeatherContent = () => {
    const {
        updateWeatherValuesByCoords,
        weatherValues,
        weatherForecast,
        getForecast,
        cityName
    } = useWeather()

    const [SVGName, setSVGName] = useState<string | null>(null)

    useLayoutEffect(() => {
        if (weatherValues) {
            const fileName = getSVGByCode(weatherValues.condition.code)
            if(fileName){
                setSVGName(fileName)
            }
        }
    }, [weatherValues])

    useLayoutEffect(() => {
        updateWeatherValuesByCoords(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (cityName) {
            getForecast(cityName, 6)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityName])

    return (
        <div>
            <PageContentBlock>
                <CurrentWeatherBlock>
                    {weatherValues && <WeatherPreview values={weatherValues} />}
                </CurrentWeatherBlock>
            </PageContentBlock>
            {SVGName && <Icon name={SVGName} />}
            {weatherForecast && <ForecastBlock forecastValues={weatherForecast} />}
        </div>
    )
}