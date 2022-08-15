import ClearSky from 'assets/images/background/clearsky.jpg'
import CloudySky from 'assets/images/background/cloudsky.jpg'
import RainSky from 'assets/images/background/rainsky.jpg'
import SnowSky from 'assets/images/background/snowsky.jpg'

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

export function getBackgroundByCode(code: number) {
    if (sun.includes(code)) {
        return ClearSky
    } else if (cloud.includes(code)) {
        return CloudySky
    } else if (snow.includes(code)) {
        return SnowSky
    } else if (rain.includes(code) || code === 1087) {
        return RainSky
    } else return ClearSky
}
