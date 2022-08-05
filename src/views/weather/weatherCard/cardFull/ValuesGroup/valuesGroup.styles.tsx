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
