import { IForecastResponse } from 'types/forecastResponse'
import { FC } from 'react'

type IForecastBlock = {
    forecastValues: IForecastResponse
}

export const ForecastBlock: FC<IForecastBlock> = ({ forecastValues }) => {

    return (
        <>
            {forecastValues.forecast.forecastday.map((item, index) => {
                return (
                    <div key={index}>
                        <span> {item.date} </span> | 
                        <span> {item.day.avgtemp_c} град. </span>
                    </div>
                )
            })}
        </>
    )
}