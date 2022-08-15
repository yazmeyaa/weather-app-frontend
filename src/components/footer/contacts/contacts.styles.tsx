import styled from 'styled-components'

export const Contacts = styled.div`
    & {
        display: flex;
        flex-direction: column;
    }
`

export const List = styled.ul`
    & {
        display: flex;
        gap: 12px;
    }
`

export const Link = styled.a`
    & {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`
