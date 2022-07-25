import { FunctionComponent, ReactNode } from 'react'

interface IBaseLayout {
    children: ReactNode
}

export type baseLayoutType = FunctionComponent<IBaseLayout>
