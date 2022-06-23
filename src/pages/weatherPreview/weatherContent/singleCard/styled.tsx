import styled from "styled-components";
import { fluidTypography } from "components/fluidTypography";

export const WeatherPreviewItem = styled.div`
    &{
        display: flex;
        font-size: ${fluidTypography(1920, 320, 20, 26)};
        text-transform: capitalize;
        user-select: none;
    }
`

