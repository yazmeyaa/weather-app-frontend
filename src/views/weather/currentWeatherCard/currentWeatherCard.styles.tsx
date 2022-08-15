import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'
import ClearSky from 'assets/images/background/clearsky.jpg'
import { ReactSVG } from 'react-svg'

export const Wrapper = styled.div`
    & {
        width: 100%;
        box-sizing: border-box;
        background-image: url(${ClearSky});
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

export const SVG = styled(ReactSVG)`
    & {
        filter: invert(100%) sepia(67%) saturate(15%) hue-rotate(217deg)
            brightness(103%) contrast(104%);
    }
`
