import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const WeatherWrapper = styled.div`
    & {
        box-sizing: border-box;
        max-width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1 0 auto;
        flex-grow: 1;
        align-self: center;
        padding: 10px;
    }
`

export const CityNameBlock = styled.h1`
    & {
        font-size: ${fluidTypography(320, 1920, 24, 32)};
        margin: 1rem 0px;
        font-family: 'Inter';
        letter-spacing: 1px;
        font-weight: 600;
    }
`

export const CardsWrapper = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (min-width: 1000px) {
            flex-direction: row;
            align-items: flex-start;
        }
    }
`
