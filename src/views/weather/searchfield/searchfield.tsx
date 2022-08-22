import { FormEvent, useContext, useState } from 'react'
import { stores } from 'store'
import { Motivation } from 'views/motivationStatus/motivation'
import {
    InputWrapper,
    SearchButton,
    SearchField,
    Wrapper,
} from './searchfield.styles'
import { SearchFieldProps } from './searchfiled.types'

export const Search: SearchFieldProps = ({ cityName }) => {
    const { updateWeatherValuesByCity } = useContext(stores.weather)
    const [inputValue, setInputValue] = useState<string>('')
    const [needsMotivation, setMotivation] = useState(false)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (inputValue.toLowerCase().trim() === 'motivation') {
            setInputValue('')
            setMotivation(true)
            return console.log('Now i am little motivated')
        }
        updateWeatherValuesByCity(inputValue)
    }

    return (
        <Wrapper onSubmit={handleSubmit}>
            Enter city name to search
            <InputWrapper>
                <SearchField
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder={cityName}
                />
                <SearchButton type="submit">search</SearchButton>
                {needsMotivation && <Motivation />}
            </InputWrapper>
        </Wrapper>
    )
}
