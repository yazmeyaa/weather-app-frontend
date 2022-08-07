import { fluidTypography } from 'components/fluidTypography'
import styled from 'styled-components'

export const Wrapper = styled.div`
    & {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 6px;
        color: white;
        font-size: ${fluidTypography(320, 1920, 20, 26)};
        cursor: default;
        animation-name: wrapperOpening;
        animation-duration: 1s;
        animation-fill-mode: forwards;

        @keyframes wrapperOpening {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`
export const ValuesItem = styled.span`
    & {
        font-size: inherit;
    }
`

export const CurrentDate = styled.div`
    & {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-bottom: 6px;
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

export const ValuesGroups = styled.div`
    & {
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        border: 4px solid #4177dc63;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 12px 6px;
        border-radius: 16px;
    }
`

export const GroupName = styled.span`
    & {
        color: white;
        font-size: 24px;
    }
`

export const GroupWrapper = styled.div`
    & {
        display: flex;
        overflow-x: scroll;
        flex-direction: row;
    }
`

export const GroupItemWrapper = styled.div`
    & {
        box-sizing: border-box;
        display: flex;
        padding: 6px;
        flex-direction: column;
        margin: 0px 6px;
        border-left: 2px solid;
        border-right: 2px solid;
        border-color: #669bfcac;
    }
`

export const GroupsWrapper = styled.div`
    & {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`
