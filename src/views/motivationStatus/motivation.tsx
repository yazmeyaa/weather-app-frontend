import { SwordSwing, Wrapper, SwordSwingWrapper } from './motivation.styles'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const motivation = document.createElement('div')

function returnRandom(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

class SwingOption {
    top = returnRandom(0, 100)
    left = returnRandom(0, 50)
    deg = returnRandom(0, 180)
    delay = returnRandom(0.5, 1.5)
}

function generateSwings(number: number) {
    const swings: Array<JSX.Element> = []

    for (let i = 0; i < number; i++) {
        swings.push(
            <SwordSwingWrapper {...new SwingOption()}>
                <SwordSwing />
            </SwordSwingWrapper>
        )
    }

    return swings
}

export const Motivation = () => {
    useEffect(() => {
        document.body.appendChild(motivation)

        return () => {
            document.removeChild(motivation)
        }
    }, [])

    return createPortal(
        <Wrapper>{generateSwings(returnRandom(10, 25))}</Wrapper>,
        motivation
    )
}
