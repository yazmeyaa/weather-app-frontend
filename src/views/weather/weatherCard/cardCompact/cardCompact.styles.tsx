import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const ValuesItem = styled.span`
    & {
        font-size: medium;
        color: white;
        cursor: default;
    }
`

export const CardDate = styled.strong`
    & {
        color: white;
        font-size: ${fluidTypography(320, 1920, 20, 28)};
        margin-bottom: 1rem;
    }
`
