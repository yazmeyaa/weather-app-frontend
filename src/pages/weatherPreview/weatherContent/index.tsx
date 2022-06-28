import { useLayoutEffect } from 'react'
import { SearchBlock } from './searchInput'
import { CurrentWeatherBlock, CurrentWeatherBlockLogo, PageContentBlock } from './styled'
import { WeatherPreview } from './weatherPreview'
import { useLocation } from 'hooks/useLocation'


export const WeatherContent = () => {
    const {
        updateWeatherValuesByCoords,
        weatherValues
    } = useLocation()

    useLayoutEffect(() => {
        updateWeatherValuesByCoords(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageContentBlock>
            <CurrentWeatherBlock>
                {weatherValues && <WeatherPreview values={weatherValues} />}
            </CurrentWeatherBlock>
                {weatherValues && <CurrentWeatherBlockLogo src={weatherValues.condition.icon} alt='logo' />}
        </PageContentBlock>
    )
}