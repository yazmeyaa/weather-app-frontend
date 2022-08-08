import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { Wrapper } from './baseLayout.styles'
import { baseLayoutType } from './baseLayout.types'

export const BaseLayout: baseLayoutType = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}
