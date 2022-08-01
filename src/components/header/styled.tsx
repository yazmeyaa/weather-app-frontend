import styled from 'styled-components'
import { fluidTypography } from 'components/fluidTypography'

export const HeaderContainer = styled.header`
    & {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 1rem;
        background-color: #4e8898;
        box-shadow: 0.5rem 0px 10px 10px #49494950;
    }
`

export const HeaderTitle = styled.h1`
    & {
        width: fit-content;
        color: #dfdfdf;
        user-select: none;
        font-weight: 600;
        font-variant: small-caps;
        font-size: ${fluidTypography(320, 1920, 24, 36)};
    }
`
