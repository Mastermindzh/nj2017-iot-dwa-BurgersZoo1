import endpoints from './external-variables/endpoints.json';

const ROOT = endpoints.serverUrl;

export const BASE_URL = endpoints.serverUrl.slice(0,-4);
 
export const PASSEN = {
  GET_MULTIPLE: `${ROOT}/passen`,
};

export const RANGER_VISITED = {
  GET_MULTIPLE_VISITS: `${ROOT}/rangerHeeftBezochts?filter=%7B%22include%22%3A%7B%22speurpunt%22%3A%20%5B%22verblijf%22%2C%22weetjes%22%5D%7D%20%7D`
};
