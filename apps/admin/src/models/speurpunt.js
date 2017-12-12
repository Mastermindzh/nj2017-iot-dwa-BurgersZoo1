class Speurpunt {

  poten;
  geolocation;
  locatienaam;
  verblijfId;

  constructor(pootid, geolocation, locatienaam, verblijfId) {
    this.pootid = pootid;
    this.geolocation = geolocation;
    this.locatienaam = locatienaam;
    this.verblijfId  = verblijfId;
  }
}

export default Speurpunt;
