import { CardsContext } from './currentCardSelected/cardsContext'
import { UserState } from './userState/userState'
import { WeatherValuesStore } from './weatherValues/weatherValuesStore'

export const stores = {
    cards: CardsContext,
    user: UserState,
    weather: WeatherValuesStore,
}
