import styled from 'styled-components'

interface IWrapperProps {
    selected: boolean
}

export const Wrapper = styled.div<IWrapperProps>`
    & {
        box-sizing: border-box;
        position: relative;
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
        max-width: 50vw;
        @media screen and (max-width: 1000px) {
            max-width: 90vw;
        }
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
