module.exports = function (hostUrl) {  
  const WEETJES_ENDPOINT = `${hostUrl}/weetjes`;
  const PASSEN_ENDPOINT = `${hostUrl}/passen`;
  const POTEN_ENDPOINT = `${hostUrl}/poten`;
  const DIERENGELUIDEN_ENDPOINT = `${hostUrl}/dierengeluiden`;
  const NFCS_ENDPOINT = `${hostUrl}/NFCS`;
  const RANGERS_ENDPOINT = `${hostUrl}/rangers`;
  const RANGER_HEEFT_BEZOCHT_ENDPOINT = `${hostUrl}/rangerHeeftBezochts`;
  const SPEURPUNTEN_ENDPOINT = `${hostUrl}/speurpunten`;
  const VERBLIJVEN_ENDPOINT = `${hostUrl}/verblijven`;
  
  const ENDPOINTS = [
    WEETJES_ENDPOINT,
    PASSEN_ENDPOINT,
    POTEN_ENDPOINT,
    DIERENGELUIDEN_ENDPOINT,
    NFCS_ENDPOINT,
    RANGERS_ENDPOINT,
    RANGER_HEEFT_BEZOCHT_ENDPOINT,
    SPEURPUNTEN_ENDPOINT,
    VERBLIJVEN_ENDPOINT
  ];
  
  const WEETJES_DATA = ['w'];
  const PASSEN_DATA = ['pas'];
  const POTEN_DATA = ['pot'];
  const DIERENGELUIDEN_DATA = ['dg'];
  const NFCS_DATA = ['nfc'];
  const RANGERS_DATA = ['rd'];
  const RANGER_HEEFT_BEZOCHT_DATA = ['rhb'];
  const SPEURPUNTEN_DATA = ['sd'];
  const VERBLIJVEN_DATA = ['vd'];
  
  
  return ENDPOINTS.map(endpoint => {
    const docs = (function getDocuments() {
      switch (endpoint) {
        case WEETJES_ENDPOINT:
          return WEETJES_DATA;
        case PASSEN_ENDPOINT:
          return PASSEN_DATA;
        case POTEN_ENDPOINT:
          return POTEN_DATA;
        case DIERENGELUIDEN_ENDPOINT:
          return DIERENGELUIDEN_DATA;
        case NFCS_ENDPOINT:
          return NFCS_DATA;
        case RANGERS_ENDPOINT:
          return RANGERS_DATA;
        case RANGER_HEEFT_BEZOCHT_ENDPOINT:
          return RANGER_HEEFT_BEZOCHT_DATA;
        case SPEURPUNTEN_ENDPOINT:
          return SPEURPUNTEN_DATA;
        case VERBLIJVEN_ENDPOINT:
          return VERBLIJVEN_DATA;
        default:
          return [];
      }
    }());
  
    return {
      url: endpoint,
      documents: docs
    };
  });
}


