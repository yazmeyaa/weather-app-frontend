import { IWeatherValues } from 'types/weatherResponse'
import { PreviewBlock, DateBlock, WeatherValue } from './styled'
import { FC, useState } from 'react'


function getWeekDay(date: number) {
    switch (date) {
        case 1: {
            return 'Monday'
        }
        case 2: {
            return 'Tuesday'
        }
        case 3: {
            return 'Wednesday'
        }
        case 4: {
            return 'Thursday'
        }
        case 5: {
            return 'Friday'
        }
        case 6: {
            return 'Saturday'
        }
        case 7: {
            return 'Sunday'
        }
        default: {
            return 'Wrong date!'
        }
    } 
}

interface IWeatherPreview {
    values: IWeatherValues
}

export const WeatherPreview: FC<IWeatherPreview> = ({ values }) => {
    const [currentDate, _] = useState(new Date())
    return (
        <PreviewBlock>
            <DateBlock>
                <span>
                    {getWeekDay(currentDate.getDay())},
                </span>
                <span>
                    {currentDate.getDate()}
                </span>
            </DateBlock>
            <WeatherValue>
                {values.temp_c}°C / {values.temp_f}F
            </WeatherValue>
            <WeatherValue>
                {currentDate.getHours()}:{currentDate.getMinutes()}
            </WeatherValue>
            <WeatherValue>
                Real Feel {values.feelslike_c}°C / {values.temp_f}F
            </WeatherValue>
            <WeatherValue>
                Humidity {values.humidity}%
            </WeatherValue>
        </PreviewBlock>
    )
}