import { IForecastResponse } from 'types/forecastResponse'
import { FC } from 'react'

type ForecastBlockType = {
    forecastValues: IForecastResponse
}

export const ForecastBlock: FC<ForecastBlockType> = ({ forecastValues }) => {

    return (
        <>
            {forecastValues.forecast.forecastday.map((item, index) => {
                return (
                    <ForecastItem key={index} avgtemp_c={item.day.avgtemp_c} currentDate={item.date} conditionImage={item.day.condition.icon} rainChance={item.day.daily_chance_of_rain} />
                )
            })}
        </>
    )
}



type ForecastItemType = {
    currentDate: string;
    avgtemp_c: number;
    conditionImage: string;
    rainChance: number;
}

const ForecastItem: FC<ForecastItemType> = ({ avgtemp_c, currentDate, conditionImage, rainChance }) => {
    return (
        <div>
            <h2>{currentDate}</h2>
            <div>
                <span>Average temp C: {avgtemp_c}</span>
                <span>Chance to rain: {rainChance}%</span>
            </div>
            <img src={conditionImage} alt='Condition' />
        </div>
    )
}