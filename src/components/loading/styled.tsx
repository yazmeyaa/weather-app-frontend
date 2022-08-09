import styled from 'styled-components'

export const Container = styled.div`
    & {
        display: flex;
        box-sizing: border-box;
    }
`

type LoaderProps = {
    lineColor: string
    delay: number
}

export const Loader = styled.div<LoaderProps>`
    & {
        display: block;
        width: 20px;
        height: 50px;
        transform-origin: top;
        transform: rotatex(180deg) translate3d(0, -200px, 0);
        background-color: ${props => {
            return props.lineColor
        }};
        animation-name: loading;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-delay: ${props => {
            return `${props.delay}s`
        }};
        @keyframes loading {
            0% {
                height: 50px;
            }
            50% {
                height: 20px;
            }
            100% {
                height: 50px;
            }
        }
    }
`
