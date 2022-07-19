import styled from 'styled-components'

export const Container = styled.section`
    & {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0px;
        background-color: #26434b;
    }
`

export const ItemContainer = styled.div`
    & {
        box-sizing: border-box;
        border: 2px solid #101d20;
        color: white;
    }
`
