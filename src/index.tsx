import { createRoot } from 'react-dom/client'
import { Router } from './components/Router/appRouter'
import { BrowserRouter } from 'react-router-dom'
import { ResetStyles } from 'components/stylesReset'
import { FontsImport } from 'components/importFonts'
import { appConfig } from '@config/appConfig'
import { WeatherValues } from 'context/weatherValuesStore'
import { BaseLayout } from 'components/baseLayout/baseLayout'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BaseLayout>
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
    </BaseLayout>
)
