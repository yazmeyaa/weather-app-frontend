const {
    REACT_APP_BACKEND_URL: backendUrl,
    NODE_ENV: nodeEnv,
    REACT_APP_URL_SUBPATCH: URLSubPatch,
} = process.env

function getValueByName(value: string | undefined, defaultValue = '') {
    return value || defaultValue
}

export const appConfig = {
    backendUrl: getValueByName(backendUrl, 'https://yazmeyaa.itracers.xyz'),
    nodeEnv: getValueByName(nodeEnv, 'production'),
    URLSubPatch: getValueByName(URLSubPatch, undefined),
}
