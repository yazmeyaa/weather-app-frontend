import { FC, ReactNode, Dispatch } from 'react'

interface UserStateProvider {
    children: ReactNode
}

export type UserStateProviderType = FC<UserStateProvider>

type userDataType = {
    token: string | null
}

export interface StateType {
    userData: userDataType
    setUserData: Dispatch<userDataType>
}
