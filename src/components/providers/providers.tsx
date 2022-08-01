import { appConfig } from '@config/appConfig'
import { BrowserRouter } from 'react-router-dom'
import { WeatherValues } from 'store/weatherValuesStore'
import { CardsContextProvider } from 'views/weather/weatherCard/helpers/activeCardState'
import { ProvidersType } from './providers.types'

export const Providers: ProvidersType = ({ children }) => {
    return (
        <BrowserRouter
            basename={
                appConfig.nodeEnv === 'production' && appConfig.URLSubPatch
                    ? appConfig.URLSubPatch
                    : undefined
            }
        >
            <WeatherValues>
                <CardsContextProvider>{children}</CardsContextProvider>
            </WeatherValues>
        </BrowserRouter>
    )
}
