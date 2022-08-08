import { Loader, Container } from './styled'

export const Loading = () => {
    return (
        <Container>
            <Loader lineColor="red" delay={0.1} />
            <Loader lineColor="green" delay={0.2} />
            <Loader lineColor="blue" delay={0.3} />
        </Container>
    )
}
