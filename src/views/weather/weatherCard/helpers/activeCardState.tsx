import { createContext, Dispatch, FC, ReactNode, useState } from 'react'
type ContextType = {
    currentCardSelected: null | number
    setCurrentCard: Dispatch<null | number>
}
type ContextProviderType = {
    children: ReactNode
}

const Context = createContext<ContextType>({} as ContextType)

const ContextProvider: FC<ContextProviderType> = ({ children }) => {
    const [currentCardSelected, setCurrentCardSelected] = useState<
        number | null
    >(null)

    const contextValue: ContextType = {
        currentCardSelected: currentCardSelected,
        setCurrentCard: setCurrentCardSelected,
    }
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { ContextProvider as CardsContextProvider, Context as CardsContext }
