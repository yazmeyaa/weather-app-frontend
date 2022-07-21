const {
    VITE_BACKEND_URL: backendUrl,
    NODE_ENV: nodeEnv,
    VITE_URL_SUBPATCH: URLSubPatch,
} = import.meta.env

function getValueByName(value: string | undefined, defaultValue = '') {
    console.log(import.meta.env)
    return value || defaultValue
}

export const appConfig = {
    backendUrl: getValueByName(backendUrl, 'localhost:3000'),
    nodeEnv: getValueByName(nodeEnv, 'production'),
    URLSubPatch: getValueByName(URLSubPatch, undefined),
}
