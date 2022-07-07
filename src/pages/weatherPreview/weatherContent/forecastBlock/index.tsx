import { IForecastResponse } from 'types/forecastResponse'
import { FC, useLayoutEffect, useState } from 'react'
import { getSVGByCode } from 'components/conditionIcons'
import { Icon } from '../icon'

type ForecastBlockType = {
    forecastValues: IForecastResponse
}

export const ForecastBlock: FC<ForecastBlockType> = ({ forecastValues }) => {
    return (
        <>
            {forecastValues.forecast.forecastday.map((item, index) => {
                return (
                    <ForecastItem
                        key={index}
                        avgTempC={item.day.avgtemp_c}
                        currentDate={item.date}
                        conditionCode={item.day.condition.code}
                        rainChance={item.day.daily_chance_of_rain}
                    />
                )
            })}
        </>
    )
}

type ForecastItemType = {
    currentDate: string
    avgTempC: number
    conditionCode: number
    rainChance: number
}

const ForecastItem: FC<ForecastItemType> = ({
    avgTempC,
    currentDate,
    conditionCode,
    rainChance,
}) => {
    const [SVGImage, setSVGImage] = useState<string | null>(null)

    useLayoutEffect(() => {
        const file = getSVGByCode(conditionCode)
        if (file) {
            setSVGImage(file)
        }
    }, [conditionCode])

    return (
        <div>
            <h2>{currentDate}</h2>
            <div>
                <span>Average temp C: {avgTempC}</span>
                <span>Chance to rain: {rainChance}%</span>
            </div>
            {SVGImage && <Icon name={SVGImage} />}
        </div>
    )
}
