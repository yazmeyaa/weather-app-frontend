import { useDynamicSVGImport } from 'hooks/useDynamicSVGImport'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface IIcon {
    name: string
}

export const Icon: FC<IIcon> = ({ name }) => {
    const { SvgIcon } = useDynamicSVGImport(name, {
        onCompleted: (name, svg) => {
            console.log(name, svg)
        },
    })

    return <>{SvgIcon && <ReactSVG src={SvgIcon} />}</>
}
