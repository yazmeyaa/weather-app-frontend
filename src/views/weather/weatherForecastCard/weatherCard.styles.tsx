import { memo } from 'react'
import styled from 'styled-components'

interface IWrapperProps {
    selected: boolean
}

export const Wrapper = memo(styled.div<IWrapperProps>`
    & {
        cursor: ${props => {
            return props.selected ? 'default' : 'pointer'
        }};
        box-sizing: border-box;
        transition: 0.5s;
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: ${props => {
            return props.selected ? '#5290a1' : '#427482'
        }};
        border: 1px solid #396571;
        height: fit-content;
        width: fit-content;
        padding: 1rem 2rem;
        box-sizing: border-box;
        min-width: 300px;
        max-width: 50vw;
        width: ${props => {
            return props.selected ? '50vw' : '33%'
        }};
        @media screen and (max-width: 1000px) {
            max-width: 90vw;
            width: ${props => {
                return props.selected ? '100vw' : '33%'
            }};
        }
    }
    &:hover {
        background-color: #5290a1;
    }
`)

export const ValuesItem = styled.span`
    & {
        font-size: medium;
    }
`
