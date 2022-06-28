import { fluidTypography } from "components/fluidTypography";
import styled from "styled-components";

export const SingleCard = styled.div`
    &{
        display: flex;
        box-sizing: border-box;
        max-width: 100%;
        min-width: 240px;
        align-items: center;
        justify-content: flex-start;
        border: 2px solid #cccccc;
        background-color: #07fff311;
        border-radius: 1rem;
        flex-direction: column;
        padding: 1rem .5rem;
    }
`

export const DateBlock = styled.div`
    &{
        display: flex;
        font-size: ${fluidTypography(1920, 320, 24, 28)};
        color: white;
    }
`

export const SingleCardValueName = styled.h3`
    &{
        font-size: ${fluidTypography(1920, 320, 18, 30)};
        user-select: none;
        font-weight: 500;
        
    }
`

export const SingleCardValue = styled.h4`
    &{
        font-size: ${fluidTypography(1920, 320, 24, 32)};
        user-select: none;
    }
`

export const PreviewBlock = styled.div`
    &{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
`