const { REACT_APP_BACKEND_URL: backendUrl, NODE_ENV: nodeEnv } = process.env

function getValueByName(value: string | undefined, defaultValue = '') {
    return value || defaultValue
}

export const appConfig = {
    backendUrl: getValueByName(backendUrl, 'localhost:3000'),
    nodeEnv: getValueByName(nodeEnv, 'production'),
}
