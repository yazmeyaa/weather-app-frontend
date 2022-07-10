import styled from 'styled-components'

export const PageBasicLayout = styled.div`
    & {
        display: flex;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-items: center;
        background: rgb(154, 170, 181);
        background: linear-gradient(
            45deg,
            rgba(154, 170, 181, 1) 0%,
            rgba(201, 218, 228, 1) 100%
        );
    }
`
