import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const ValuesItem = styled.span`
    & {
        font-size: inherit;
    }
`

export const Wrapper = styled.div`
    & {
        display: flex;
        flex-direction: column;
        color: white;
        padding: 25px 50px;
        font-size: ${fluidTypography(320, 1920, 20, 26)};
    }
`

export const CurrentDate = styled.div`
    & {
        font-size: ${fluidTypography(320, 1920, 18, 46)};
    }
`

export const CurrentTemp = styled.div`
    & {
        font-size: ${fluidTypography(320, 1920, 34, 60)};
    }
`
