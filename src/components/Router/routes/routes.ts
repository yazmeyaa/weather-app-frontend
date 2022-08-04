import { WeatherPage } from 'views/weather'
import { routesListType } from './routes.types'

const routesList: routesListType = [
    {
        ID: 0,
        path: '/',
        element: WeatherPage,
        protected: false,
    },
]

export { routesList }
