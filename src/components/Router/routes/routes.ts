import { LandingPage } from 'views/weather'
import { routesListType } from './routes.types'

const routesList: routesListType = [
    {
        ID: 0,
        path: '/',
        element: LandingPage,
        protected: false,
    },
    {
        ID: 99999,
        path: '*',
        element: LandingPage,
    },
]

export { routesList }
