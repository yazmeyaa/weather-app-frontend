import { appConfig } from '@config/appConfig'
import { BrowserRouter } from 'react-router-dom'
import { UserStateProvider } from 'store/userState/userState'
import { WeatherValues } from 'store/weatherValues/weatherValuesStore'
import { CardsContextProvider } from 'store/currentCardSelected/cardsContext'
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
            <UserStateProvider>
                <WeatherValues>
                    <CardsContextProvider>{children}</CardsContextProvider>
                </WeatherValues>
            </UserStateProvider>
        </BrowserRouter>
    )
}
