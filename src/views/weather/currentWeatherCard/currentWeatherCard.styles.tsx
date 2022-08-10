import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const Wrapper = styled.div`
    & {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: blueviolet;
        gap: 12px;
    }
`
export const ValuesGroup = styled.section`
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const ValueContainer = styled.div`
    & {
        display: flex;
        flex-direction: column;
    }
`

export const ValueName = styled.strong`
    & {
        color: white;
        font-family: 'Inter';
        font-size: ${fluidTypography(320, 1920, 20, 32)};
    }
`

export const Value = styled(ValueName)`
    & {
        font-size: ${fluidTypography(320, 1920, 18, 30)};
    }
`

export const SVGWrapper = styled.div`
    & {
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
