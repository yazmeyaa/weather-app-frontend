import { useLayoutEffect } from 'react'
import { CurrentWeatherBlock, CurrentWeatherBlockLogo, PageContentBlock } from './styled'
import { WeatherPreview } from './weatherPreview'
import { useLocation } from 'hooks/useLocation'


export const WeatherContent = () => {
    const {
        updateWeatherValuesByCoords,
        weatherValues,
        weatherForecast,
        getForecast
    } = useLocation()

    useLayoutEffect(() => {
        updateWeatherValuesByCoords(true)
        getForecast('Moscow', 6)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(()=>{
        console.log(weatherForecast?.forecast.forecastday)
    },[weatherForecast])

    return (
        <PageContentBlock>
            <CurrentWeatherBlock>
                {weatherValues && <WeatherPreview values={weatherValues} />}
            </CurrentWeatherBlock>
            {weatherValues && <CurrentWeatherBlockLogo src={weatherValues.condition.icon} alt='logo' />}
        </PageContentBlock>
    )
}