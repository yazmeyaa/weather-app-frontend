import { Footer } from 'components/footer'
import { Header } from 'components/header'
import { ReactNode, FC } from 'react'
import { Wrapper } from './styled'

interface IBaseLayout {
    children: ReactNode
}

export const BaseLayout: FC<IBaseLayout> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}
