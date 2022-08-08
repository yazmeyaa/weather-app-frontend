import styled from 'styled-components'

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
        scrollbar-color: #d4aa70 #e4e4e4;
        scrollbar-width: thin;
        scrollbar-gutter: stable;
    }
    &::-webkit-scrollbar {
        width: 100%;
        padding: 1rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #3a63ae;
        border-radius: 0.5rem;
        border: 2px solid rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-thumb {
        box-sizing: border-box;
        border-radius: 0.5rem;
        background-color: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(0, 0, 0, 0.2);
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

export const ValuesItem = styled.span`
    & {
        font-size: inherit;
    }
`
