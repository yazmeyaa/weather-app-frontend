import { WeatherValuesType } from 'types/weatherResponse'
import { PreviewBlock, DateBlock, WeatherValue } from './styled'
import { FC, useRef } from 'react'

function getWeekDay(date: number) {
    switch (date) {
        case 0: {
            return 'Sunday'
        }
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
        default: {
            return 'Wrong date!'
        }
    }
}

interface IWeatherPreview {
    values: WeatherValuesType
}

export const WeatherPreview: FC<IWeatherPreview> = ({ values }) => {
    const currentDate = useRef(new Date())
    return (
        <PreviewBlock>
            <DateBlock>
                <span>{getWeekDay(currentDate.current.getDay())},</span>
                <span>{currentDate.current.getDate()}</span>
            </DateBlock>
            <WeatherValue>
                {values.temp_c}°C / {values.temp_f}F
            </WeatherValue>
            <WeatherValue>
                {currentDate.current.getHours()}:
                {currentDate.current.getMinutes()}
            </WeatherValue>
            <WeatherValue>
                Real Feel {values.feelslike_c}°C / {values.temp_f}F
            </WeatherValue>
            <WeatherValue>Humidity {values.humidity}%</WeatherValue>
        </PreviewBlock>
    )
}
