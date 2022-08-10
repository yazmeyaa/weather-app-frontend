import { Loading } from 'components/loading/loading'
import { ComponentType } from 'react'

type withLoadingProps = {
    loading: boolean | number
}

function withLoading<T>(Component: ComponentType<T>) {
    const LoadadbleComponent = (props: T & withLoadingProps) => {
        return props.loading ? <Loading /> : <Component {...props} />
    }
    return LoadadbleComponent
}

export { withLoading }
export type withLoadingType = ReturnType<typeof withLoading>
