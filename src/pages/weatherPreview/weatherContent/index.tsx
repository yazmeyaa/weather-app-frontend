import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CurrentWeatherBlock, CurrentWeatherBlockLogo, PageContentBlock } from './styled'
import { WeatherPreview } from './weatherPreview'
import { ForecastBlock } from './forecastBlock/index'
import { useWeather } from 'hooks/useLocation'
import { useDynamicSVGImport } from 'hooks/useDynamicSVGImport'


export const WeatherContent = () => {
    const {
        updateWeatherValuesByCoords,
        weatherValues,
        weatherForecast,
        getForecast,
        cityName
    } = useWeather()

    const {SvgIcon: Sun} = useDynamicSVGImport('Sun.svg')

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
                {Sun && <Sun />}
            </PageContentBlock>
            {weatherForecast && <ForecastBlock forecastValues={weatherForecast} />}
        </div>
    )
}