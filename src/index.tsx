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

console.log(
    '%c Add me in telegram ;)',
    'font-weight: bold; font-size: 25px;color: red; colo: cyan; font-weight: 700;'
)

console.log(
    '%c https://t.me/future_undefined',
    'font-weight: bold; font-size: 35px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
)
