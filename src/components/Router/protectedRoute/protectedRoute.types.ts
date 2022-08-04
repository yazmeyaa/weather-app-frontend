import { FC } from 'react'

interface IProtectedRoutes {
    token: string | null
    children: React.ReactNode
}

export type ProtectedRouteType = FC<IProtectedRoutes>
