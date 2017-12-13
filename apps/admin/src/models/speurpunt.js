class Speurpunt {

  poten;
  geolocation;
  locatienaam;
  verblijfId;
  id;

  constructor(pootid, geolocation, locatienaam, verblijfId, id = "") {
    this.pootid = pootid;
    this.geolocation = geolocation;
    this.locatienaam = locatienaam;
    this.verblijfId  = verblijfId;
    this.id = id;
  }

}

export default Speurpunt;
