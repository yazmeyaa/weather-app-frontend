import { createRoot } from 'react-dom/client'
import { Router } from './components/Router/appRouter'
import { BrowserRouter } from 'react-router-dom'
import { ResetStyles } from 'components/stylesReset'
import { FontsImport } from 'components/importFonts'
import { appConfig } from '@config/appConfig'
import { WeatherValues } from 'context/weatherValuesStore'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <WeatherValues>
        <BrowserRouter
            basename={
                appConfig.nodeEnv === 'production' && appConfig.URLSubPatch
                    ? appConfig.URLSubPatch
                    : undefined
            }
        >
            <FontsImport />
            <ResetStyles />
            <Router />
        </BrowserRouter>
    </WeatherValues>
)
