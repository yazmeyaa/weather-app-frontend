import { createRoot } from 'react-dom/client'
import { ResetStyles } from 'components/stylesReset'
import { FontsImport } from 'components/importFonts'
import { BaseLayout } from 'components/baseLayout/baseLayout'
import { Providers } from 'components/providers/providers'
import { MappedRoutes } from 'components/Router/routes/mappedRoutes'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Providers>
        <BaseLayout>
            <FontsImport />
            <ResetStyles />
            <MappedRoutes />
        </BaseLayout>
    </Providers>
)
