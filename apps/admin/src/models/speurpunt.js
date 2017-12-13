import BaseModel from './base-model';

class Speurpunt extends BaseModel{

  poten;
  geolocation;
  locatienaam;
  verblijfId;
  id;

  constructor(pootid, geolocation, locatienaam, verblijfId, id = "") {
    super();
    this.pootid = pootid;
    this.geolocation = geolocation;
    this.locatienaam = locatienaam;
    this.verblijfId  = verblijfId;
    this.id = id;
  }

}

export default Speurpunt;
