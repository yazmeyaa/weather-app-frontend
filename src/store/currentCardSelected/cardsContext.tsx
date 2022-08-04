import { createContext, useState } from 'react'
import { ContextProviderType, ContextType } from './cardsContext.types'

const Context = createContext<ContextType>({} as ContextType)

const ContextProvider: ContextProviderType = ({ children }) => {
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
