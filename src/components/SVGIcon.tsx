import { useDynamicSVGImport } from 'hooks/useDynamicSVGImport'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

interface IIcon {
    SVGPath: string
}

const CustomSVG = styled(ReactSVG)`
    & {
        fill: white;
    }
`

export const Icon: FC<IIcon> = ({ SVGPath }) => {
    const { SvgIcon } = useDynamicSVGImport(SVGPath)

    return SvgIcon ? <CustomSVG src={SvgIcon} /> : <></>
}
