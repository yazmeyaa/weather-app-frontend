import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const WeatherWrapper = styled.div`
    & {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1 0 auto;
        flex-grow: 1;
        align-self: center;
        padding: 10px;
        min-width: 50vw;
        transition: 1s;
    }
`

export const CityNameBlock = styled.div`
    & {
        font-size: ${fluidTypography(320, 1920, 24, 32)};
        margin: 1rem 0px;
    }
`

export const CardsWrapper = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 1000px) {
            flex-direction: row;
            align-items: baseline;
            transition-delay: 0.1s;
        }
    }
`
