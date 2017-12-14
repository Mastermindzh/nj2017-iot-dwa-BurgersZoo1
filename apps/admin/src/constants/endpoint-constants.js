const SERVER = "http://localhost:8001/api";
const SPEURPUNTEN = "/speurpunten";


export const SPEURPUNT = {
  GET: `${SERVER}${SPEURPUNTEN}?filter=%7B%22include%22%3A%20%5B%22dierengeluid%22%2C%22verblijf%22%2C%20%22weetjes%22%5D%7D`,
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
