import { useDynamicSVGImport } from 'hooks/useDynamicSVGImport'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface IIcon {
    SVGPath: string
}

export const Icon: FC<IIcon> = ({ SVGPath }) => {
    const { SvgIcon } = useDynamicSVGImport(SVGPath)

    return SvgIcon ? <ReactSVG src={SvgIcon} /> : <></>
}
