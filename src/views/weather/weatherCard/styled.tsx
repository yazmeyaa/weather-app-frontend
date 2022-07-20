import styled from 'styled-components'

interface IWrapperProps {
    selected: boolean
}

export const Wrapper = styled.div<IWrapperProps>`
    & {
        display: flex;
        flex-direction: column;
        background-color: ${props => {
            return props.selected ? '#5290a1' : '#427482'
        }};
        height: fit-content;
        width: fit-content;
        padding: 2rem;
        transition: 0.5s;
        box-sizing: border-box;
        min-width: 240px;
    }
    &:hover {
        background-color: #5290a1;
    }
`
export const ValuesItem = styled.span`
    & {
        font-size: medium;
    }
`
