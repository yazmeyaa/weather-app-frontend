type IconsType = {
  condition: string;
  code: number;
  localFileName: string;
};

export const iconsCondition: Array<IconsType> = [
  {
    condition: "Sun",
    code: 1000,
    localFileName: "Sun.svg",
  },
  {
    condition: "Partly cloudy",
    code: 1003,
    localFileName: "Cloud-Sun.svg",
  },
  {
    condition: "Cloudy",
    code: 1006,
    localFileName: "Cloud.svg",
  },
  {
    condition: "Overcast",
    code: 1009,
    localFileName: "Cloud-Sun.svg",
  },
  {
    condition: "Mist",
    code: 1030,
    localFileName: "Cloud-Fog-Alt.svg",
  },
  {
    condition: "Patchy rain possible",
    code: 1063,
    localFileName: "Cloud-Drizzle.svg",
  },
  {
    condition: "Patchy snow possible",
    code: 1066,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Patchy sleet possible",
    code: 1069,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Patchy freezing drizzle possible",
    code: 1072,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Thundery outbreaks possible",
    code: 1087,
    localFileName: "Cloud-Lightning.svg",
  },
  {
    condition: "Blowing snow",
    code: 1114,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Blizzard",
    code: 1117,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Fog",
    code: 1135,
    localFileName: "Cloud-Fog-Alt.svg",
  },
  {
    condition: "Freezing fog",
    code: 1147,
    localFileName: "Cloud-Fog-Alt.svg",
  },
  {
    condition: "Patchy light drizzle",
    code: 1150,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Light drizzle",
    code: 1153,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Freezing drizzle",
    code: 1168,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Heavy freezing drizzle",
    code: 1171,
    localFileName: "Cloud-Drizzle.svg",
  },
  {
    condition: "Patchy light rain",
    code: 1180,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Light rain",
    code: 1183,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Moderate rain at times",
    code: 1186,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Moderate rain",
    code: 1189,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Heavy rain at times",
    code: 1192,
    localFileName: "Cloud-Drizzle.svg",
  },
  {
    condition: "Heavy rain",
    code: 1195,
    localFileName: "Cloud-Drizzle.svg",
  },
  {
    condition: "Light freezing rain",
    code: 1198,
    localFileName: "Cloud-Drizzle-Alt.svg",
  },
  {
    condition: "Moderate or heavy freezing rain",
    code: 1201,
    localFileName: "Cloud-Drizzle.svg",
  },
  {
    condition: "Light sleet",
    code: 1204,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Moderate or heavy sleet",
    code: 1207,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Patchy light snow",
    code: 1210,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Light snow",
    code: 1213,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Patchy moderate snow",
    code: 1216,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Moderate snow",
    code: 1219,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Patchy heavy snow",
    code: 1222,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Heavy snow",
    code: 1225,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Ice pellets",
    code: 1237,
    localFileName: "Cloud-Hail-Moon-Alt.svg",
  },
  {
    condition: "Light rain shower",
    code: 1240,
    localFileName: "Cloud-Hail-Alt.svg",
  },
  {
    condition: "Moderate or heavy rain shower",
    code: 1243,
    localFileName: "Cloud-Hail-Alt.svg",
  },
  {
    condition: "Torrential rain shower",
    code: 1246,
    localFileName: "Cloud-Hail-Alt.svg",
  },
  {
    condition: "Light sleet showers",
    code: 1249,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Moderate or heavy sleet showers",
    code: 1252,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Light snow showers",
    code: 1255,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Moderate or heavy snow showers",
    code: 1258,
    localFileName: "Cloud-Snow.svg",
  },
  {
    condition: "Light showers of ice pellets",
    code: 1261,
    localFileName: "Cloud-Hail-Alt.svg",
  },
  {
    condition: "Moderate or heavy showers of ice pellets",
    code: 1264,
    localFileName: "Cloud-Hail-Alt.svg",
  },
  {
    condition: "Patchy light rain with thunder",
    code: 1273,
    localFileName: "Cloud-Lightning.svg",
  },
  {
    condition: "Moderate or heavy rain with thunder",
    code: 1276,
    localFileName: "Cloud-Lightning.svg",
  },
  {
    condition: "Patchy light snow with thunder",
    code: 1279,
    localFileName: "Cloud-Lightning.svg",
  },
  {
    condition: "Moderate or heavy snow with thunder",
    code: 1282,
    localFileName: "Cloud-Lightning.svg",
  },
];

export function getSVGByCode(code: number) {
  const fileNameResult = iconsCondition.find((item) => item.code === code);

  return fileNameResult ? fileNameResult.localFileName : null;
}
