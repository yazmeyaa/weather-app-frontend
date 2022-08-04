interface singleRoute {
    ID: number
    path: string
    element: () => JSX.Element
    protected?: boolean
}

export type routesListType = Array<singleRoute>
