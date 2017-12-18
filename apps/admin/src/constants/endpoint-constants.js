export const BASE_URL = "http://localhost:8001";
const SERVER = `${BASE_URL}/api`;
const SPEURPUNTEN = "/speurpunten";


export const SPEURPUNT = {
  GET: `${SERVER}${SPEURPUNTEN}`,
  POST: `${SERVER}${SPEURPUNTEN}`,
  PATCH: `${SERVER}${SPEURPUNTEN}`
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
