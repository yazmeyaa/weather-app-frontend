import styled from 'styled-components'

export const Container = styled.section`
    & {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0px 1rem;
        background-color: #26434b;
        padding-top: 1rem;
    }
`

export const ItemContainer = styled.div`
    & {
        box-sizing: border-box;
        color: white;
    }
`
