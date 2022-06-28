import { requestPathes } from 'hooks/useLocation'
import { FC, SyntheticEvent, useState, ChangeEvent } from 'react'
import { SearchBlockBody, SearchInputLabel, SearchInput, SearchForm, SearchButton } from './styled'

interface ISearchBlockProps {
    cityName: string
    isLoading: boolean
    setCityName: (cityNameToSearch: string, APImethod: requestPathes.getWeatherByCity) => Promise<void>
}

export const SearchBlock: FC<ISearchBlockProps> = ({ setCityName, cityName, isLoading }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [isInputFocused, setInputFocused] = useState<boolean>(false)

    function requestCityName(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()

        if (inputValue) {
            setCityName(inputValue, requestPathes.getWeatherByCity)
            setInputValue('')
        }
    }

    function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function handleChangeInputFocus() {
        setInputFocused(prevState => {
            return !prevState
        })
    }

    return (
        <SearchForm onSubmit={requestCityName} >
            <SearchBlockBody>
                <SearchInputLabel>
                    <span>Поиск города</span>
                    <SearchInput
                        placeholder={isInputFocused ? '🔍Введите сюда название города' : cityName}
                        type={'text'}
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        onFocus={handleChangeInputFocus}
                        onBlur={handleChangeInputFocus}
                        name='cityName'
                        autoComplete='off'
                    />
                </SearchInputLabel>
                <SearchButton type='submit' disabled={isLoading} >искать</SearchButton>
            </SearchBlockBody>
        </SearchForm>
    )
}