import endpoints from './external-variables/endpoints.json';

const SERVER = endpoints.serverUrl;
const SPEURPUNTEN = "/speurpunten";


export const FILTER = {
  ALL: `?filter=%7B%22include%22%3A%20%5B%22dierengeluid%22%2C%22verblijf%22%2C%20%22weetjes%22%5D%7D`
};

export const SPEURPUNT = {
  GET: `${SERVER}${SPEURPUNTEN}${FILTER.ALL}`,
  POST: `${SERVER}${SPEURPUNTEN}`,
  PATCH: `${SERVER}${SPEURPUNTEN}`,
  GETONE: `${SERVER}${SPEURPUNTEN}`,


  FILTER: ``
};
export const DIERENGELUIDEN = {
  GET: `${SERVER}/dierengeluiden`
};
export const WEETJES = {
  GET: `${SERVER}/weetjes`
};
export const POTEN = {
  GET: `${SERVER}/poten`
};
export const VERBLIJVEN = {
  GET: `${SERVER}/verblijven`
};
