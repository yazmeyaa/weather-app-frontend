import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const Wrapper = styled.div`
    & {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        background-color: blueviolet;
        color: white;
        font-weight: 700;
        font-size: ${fluidTypography(320, 1920, 20, 32)};
    }
`
