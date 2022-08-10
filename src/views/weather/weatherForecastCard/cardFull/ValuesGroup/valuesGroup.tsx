import { memo } from 'react'
import { units } from '../../helpers/units'
import { valueNames } from '../../helpers/values'
import {
    GroupItemWrapper,
    GroupName,
    GroupWrapper,
    ValuesGroups,
    ValuesItem,
} from './valuesGroup.styles'
import { ValuesGroupPropsType } from './valuesGroup.types'

const ValuesGroup: ValuesGroupPropsType = memo(function ValuesGroup({
    forecastValues,
    value,
}) {
    return (
        <ValuesGroups>
            <GroupName>{valueNames[value]}</GroupName>
            <GroupWrapper>
                {forecastValues &&
                    forecastValues.hour.map((item, index) => {
                        return (
                            <GroupItemWrapper key={index}>
                                <data>
                                    {`${index.toString().padStart(2, '0')}:00`}
                                </data>
                                <ValuesItem>
                                    {`${item[value].toString()}${units[value]}`}
                                </ValuesItem>
                            </GroupItemWrapper>
                        )
                    })}
            </GroupWrapper>
        </ValuesGroups>
    )
})
export { ValuesGroup }
