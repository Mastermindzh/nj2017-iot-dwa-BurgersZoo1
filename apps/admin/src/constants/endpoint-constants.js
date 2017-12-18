const SERVER = "http://localhost:8001/api";
const SPEURPUNTEN = "/speurpunten";
const SERVERBASE = "http://localhost:8001/";

export const SPEURPUNT = {
  GET: `${SERVER}${SPEURPUNTEN}`,
  POST: `${SERVER}${SPEURPUNTEN}`,
  PATCH: `${SERVER}${SPEURPUNTEN}`
};
export const DIERENGELUIDEN = {
  GET: `${SERVER}/dierengeluiden`
};
export const WEETJES = {
  GET: `${SERVER}/weetjes`,
  POST: `${SERVER}/weetjes`
};
export const UPLOAD = {
  POST: `${SERVER}/upload`
};
export const BASE = {
  GET: `${SERVERBASE}`
};
export const POTEN = {
  GET: `${SERVER}/poten`
};
export const VERBLIJVEN = {
  GET: `${SERVER}/verblijven`
};
