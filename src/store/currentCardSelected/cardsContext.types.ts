import { Dispatch, FC, ReactNode } from 'react'

interface ContextProviderInterface {
    children: ReactNode
}

export type ContextType = {
    currentCardSelected: null | number
    setCurrentCard: Dispatch<null | number>
}

export type ContextProviderType = FC<ContextProviderInterface>
