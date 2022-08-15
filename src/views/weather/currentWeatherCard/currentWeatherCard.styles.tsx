import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'
import { getBackgroundByCode } from './helpers/getBackground'

type WrapperProps = {
    conditionCode: number
}

export const Wrapper = styled.div<WrapperProps>`
    & {
        width: 100%;
        box-sizing: border-box;
        background-image: ${props => {
            return `url('${getBackgroundByCode(props.conditionCode)}')`
        }};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

export const BackgroundBlur = styled.div`
    & {
        backdrop-filter: blur(6px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 20px;
        gap: 12px;
    }
`
export const ValuesGroup = styled.section`
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 9999;
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
