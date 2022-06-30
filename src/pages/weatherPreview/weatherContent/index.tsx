import { useEffect, useLayoutEffect } from 'react'
import { CurrentWeatherBlock, CurrentWeatherBlockLogo, PageContentBlock } from './styled'
import { WeatherPreview } from './weatherPreview'
import { ForecastBlock } from './forecastBlock/index'
import { useWeather } from 'hooks/useLocation'


export const WeatherContent = () => {
    const {
        updateWeatherValuesByCoords,
        weatherValues,
        weatherForecast,
        getForecast,
        cityName
    } = useWeather()

    useLayoutEffect(() => {
        updateWeatherValuesByCoords(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (cityName) {
            getForecast(cityName, 6)
        }
    }, [cityName])

    return (
        <div>
            <PageContentBlock>
                <CurrentWeatherBlock>
                    {weatherValues && <WeatherPreview values={weatherValues} />}
                </CurrentWeatherBlock>
                {weatherValues && <CurrentWeatherBlockLogo src={weatherValues.condition.icon} alt='logo' />}
            </PageContentBlock>
            {weatherForecast && <ForecastBlock forecastValues={weatherForecast} />}
        </div>
    )
}