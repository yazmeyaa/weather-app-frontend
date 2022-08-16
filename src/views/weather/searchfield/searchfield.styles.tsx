import styled from 'styled-components'

export const Wrapper = styled.form`
    & {
        width: 100%;
        font-family: 'Inter';
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 12px 0px;
        gap: 6px;
    }
`

export const InputWrapper = styled.label`
    & {
        display: flex;
        gap: 4px;
        flex: 1 1 auto;
    }
`
export const SearchField = styled.input`
    & {
        border: 2px solid #4e8898;
        padding: 0.5rem 0.5rem;
        outline: none;
    }
`

export const SearchButton = styled.button`
    & {
        font-family: 'Inter';
        text-transform: uppercase;
        background-color: transparent;
        border: 2px solid #4e8898;
    }
`
