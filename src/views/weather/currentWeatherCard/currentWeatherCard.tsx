import { useContext } from 'react'
import { WeatherValuesStore } from 'store/weatherValues/weatherValuesStore'
import {
    Wrapper,
    ValueName,
    ValueContainer,
    ValuesGroup,
    SVGWrapper,
} from './currentWeatherCard.styles'
import { useDynamicSVGImport } from 'hooks/useDynamicSVGImport'
import { ReactSVG } from 'react-svg'

export const CurrentWeatherCard = () => {
    const { weatherValues } = useContext(WeatherValuesStore)
    const { SvgIcon } = useDynamicSVGImport('Sun')
    return (
        <Wrapper>
            <ValuesGroup>
                <ValueContainer>
                    <ValueName>
                        temp_c {weatherValues && weatherValues.temp_c}
                    </ValueName>
                </ValueContainer>
            </ValuesGroup>
            <SVGWrapper>{SvgIcon && <ReactSVG src={SvgIcon} />}</SVGWrapper>
        </Wrapper>
    )
}
