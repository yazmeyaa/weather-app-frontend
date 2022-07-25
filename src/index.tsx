import { createRoot } from 'react-dom/client'
import { Router } from './components/Router/appRouter'
import { ResetStyles } from 'components/stylesReset'
import { FontsImport } from 'components/importFonts'
import { BaseLayout } from 'components/baseLayout/baseLayout'
import { Providers } from 'components/providers/providers'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Providers>
        <BaseLayout>
            <FontsImport />
            <ResetStyles />
            <Router />
        </BaseLayout>
    </Providers>
)
