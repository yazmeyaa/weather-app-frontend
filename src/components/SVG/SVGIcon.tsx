import { Loading } from 'components/loading/loading'
import {
    useDynamicSVGImport,
    UseDynamicSVGImportOptions,
} from 'hooks/useDynamicSVGImport'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string
    onerror?: UseDynamicSVGImportOptions['onError']
    oncompleted?: UseDynamicSVGImportOptions['onCompleted']
}

export const Icon: React.FC<IconProps> = ({
    name,
    oncompleted,
    onerror,
    ...rest
}) => {
    const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
        onCompleted: oncompleted,
        onError: onerror,
    })
    if (error) {
        return <div> {error.message} </div>
    }
    if (loading) {
        return <Loading />
    }
    if (SvgIcon) {
        return <svg />
    }
    return null
}
