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
        position: relative;
        padding: 2rem 4rem;
        color: white;
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

export const CloseButton = styled.button`
    & {
        position: absolute;
        left: 100%;
        top: -2rem;
        width: fit-content;
        padding: 6px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #002472;
        font-weight: 700;
        font-size: 2rem;
    }
`
