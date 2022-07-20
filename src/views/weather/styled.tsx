import styled from 'styled-components'

export const WeatherWrapper = styled.div`
    & {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1 0 auto;
        flex-grow: 1;
        align-self: center;
        padding: 10px;
        border: 1px solid red;
        min-width: 50vw;
    }
`
