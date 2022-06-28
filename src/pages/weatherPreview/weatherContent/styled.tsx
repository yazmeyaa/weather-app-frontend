import styled from "styled-components"
import { fluidTypography } from "components/fluidTypography"

export const PageContentBlock = styled.section`
    &{
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #325761;
        width: fit-content;
        padding: 3rem 2rem;
    }
`

export const CurrentWeatherBlock = styled.div`
    &{

    }
`

export const CurrentWeatherBlockLogo = styled.div`
    &{

    }
`

export const WeatherPreviewBlock = styled.div`
    &{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const WeatherPreviewCityName = styled.h2`
    &{
        align-self: center;
        user-select: none;
        font-size: ${fluidTypography(1920, 320, 24, 34)}
    }
`

export const WeatherPreviewContainer = styled.div`
        &{
            display: flex;
            box-sizing: border-box;
            width: 100%;
            overflow-x: scroll;
            border: 1px solid #989898;
            border-radius: 8px ;
            padding: 1rem;
            gap: 1rem;
        }
`