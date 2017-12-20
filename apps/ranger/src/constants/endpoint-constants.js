import endpoints from './external-variables/endpoints.json';

const ROOT = endpoints.serverUrl;
 
export const PASSEN = {
  GET_MULTIPLE: `${ROOT}/passen`,
};

export const RANGER_VISITED = {
  GET_MULTIPLE_VISITS: `${ROOT}/rangerHeeftBezochts?filter=%7B%22include%22%3A%7B%22speurpunt%22%3A%20%22verblijf%22%7D%7D`
};
