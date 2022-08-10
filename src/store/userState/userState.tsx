import { createContext, useState } from 'react'
import { StateType, UserStateProviderType } from './userState.types'

export const UserState = createContext({})

export const UserStateProvider: UserStateProviderType = ({ children }) => {
    const [userData, setUserData] = useState<StateType>()
    const initialState = {
        userData,
        setUserData,
    }
    return (
        <UserState.Provider value={initialState}>{children}</UserState.Provider>
    )
}
