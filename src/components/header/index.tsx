import { SearchBar } from './searchBar'
import { HeaderContainer, HeaderTitle } from './styled'

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Weather app</HeaderTitle>
            <SearchBar />
        </HeaderContainer>
    )
}
