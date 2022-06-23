import { useLayoutEffect } from 'react'
import { SearchBlock } from './searchInput'
import { PageContentBlock, WeatherPreviewCityName, WeatherPreviewBlock } from './styled'
import { WeatherPreview } from './weatherPreview'
import { useLocation } from 'hooks/useLocation'


export const WeatherContent = () => {
    const { 
        cityName,
        weatherValues,
        updateWeatherValuesByCity,
        updateWeatherValuesByCoords
         } = useLocation()

    useLayoutEffect(() => {
        updateWeatherValuesByCoords(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageContentBlock>
            <WeatherPreviewBlock>

                <SearchBlock cityName={cityName ?? 'London'} setCityName={updateWeatherValuesByCity} />

                <WeatherPreviewCityName>
                    {cityName}
                </WeatherPreviewCityName>

                {weatherValues && <WeatherPreview values={weatherValues} />}

            </WeatherPreviewBlock>
        </PageContentBlock>
    )
}