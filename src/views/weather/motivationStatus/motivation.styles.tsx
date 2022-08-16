import styled from 'styled-components'

export const Wrapper = styled.div`
    & {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        overflow: hidden;
        animation-name: showMe;
        animation-fill-mode: forwards;
        animation-duration: 0.05s;

        @keyframes showMe {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 0.8;
                background-color: black;
            }
        }
    }
`

export const SwordSwingWrapper = styled.div<{
    deg: number
    top: number
    left: number
    delay: number
}>`
    & {
        position: absolute;
        top: ${props => props.top}%;
        transform: ${props => {
            return `rotate(${props.deg}deg)`
        }};
        left: ${props => props.left}%;
        opacity: 0;

        animation-name: showme;
        animation-fill-mode: forwards;
        animation-duration: 0.05s;
        animation-iteration-count: 1;
        animation-delay: ${props => props.delay}s;

        @keyframes showme {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }
`

export const SwordSwing = styled.div`
    & {
        box-sizing: border-box;
        width: 100vw;
        height: 10px;
        background-color: white;
        padding: 5px;
        border-radius: 50%;
        border: double 5px #0f0e1a;
        -webkit-box-shadow: 0px -2px 30px 10px rgba(7, 8, 8, 0.59);
        -moz-box-shadow: 0px -2px 30px 10px rgba(7, 8, 8, 0.59);
        box-shadow: 0px -2px 30px 10px rgba(7, 8, 8, 0.59);
        z-index: 9999;
    }
`
