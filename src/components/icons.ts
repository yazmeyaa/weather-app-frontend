import { ReactComponent as Sun } from 'assets/weather-icons/Sun.svg'
import { ReactComponent as Rain } from 'assets/weather-icons/Cloud-Hail-Alt.svg'
import { ReactComponent as Cloud } from 'assets/weather-icons/Cloud-Sun.svg'
import { ReactComponent as Snow } from 'assets/weather-icons/Cloud-Snow.svg'
import { ReactComponent as Thunder } from 'assets/weather-icons/Cloud-Lightning.svg'

const sun = [1000]
const cloud = [1003, 1006, 1009, 1030, 1135, 1147]
const rain = [
    1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
    1198, 1201, 1237, 1240, 1243, 1246, 1261, 1264, 1273, 1276,
]
const snow = [
    1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
    1249, 1252, 1255, 1258, 1279, 1282,
]
const thunder = [1087]

function getIconByCode(code: number) {
    if (sun.includes(code)) {
        return Sun
    } else if (cloud.includes(code)) {
        return Cloud
    } else if (rain.includes(code)) {
        return Rain
    } else if (snow.includes(code)) {
        return Snow
    } else if (thunder.includes(code)) {
        return Thunder
    } else return Sun
}

export default getIconByCode
