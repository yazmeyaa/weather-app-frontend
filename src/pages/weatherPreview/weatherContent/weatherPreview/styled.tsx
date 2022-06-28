import { fluidTypography } from "components/fluidTypography";
import styled from "styled-components";

export const DateBlock = styled.div`
    &{
        display: flex;
        font-family: 'Coda';
        font-size: ${fluidTypography(1920, 320, 26, 32)};
        margin-bottom: 1rem;
    }
`

export const WeatherValue = styled.div`
    &{
        display: flex;
        flex-direction: row;
        font-family: 'Coda';
        font-size: ${fluidTypography(1920, 320, 14, 20)};
    }
`

export const PreviewBlock = styled.div`
    &{
        display: flex;
        max-width: 100%;
        box-sizing: border-box;
        flex-direction: column;
        font-family: 'Coda';
        color: white;
    }
`