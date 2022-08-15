import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    & {
        display: flex;
        background-color: rgba(130, 134, 255, 0.116);
        justify-content: space-around;
        align-items: center;
        padding: 2rem;
        flex: 0 0 auto;
        width: 100%;
        box-sizing: border-box;
        border-top: 3px solid rgba(130, 134, 255, 0.185);
    }
`

export const Contacts = styled.div`
    & {
        display: flex;
        flex-direction: column;
    }
`

export const APILogo = styled.div`
    & {
        display: flex;
        flex-direction: column;
        font-weight: 600;
    }
`
