import BaseModel from './base-model';

class Speurpunt extends BaseModel{

  poten;
  geolocation;
  locatienaam;
  verblijfId;
  id;
  dierengeluid;

  constructor(pootid, geolocation, locatienaam, verblijfId, id = null, dierengeluid = null ) {
    super();
    this.pootid = pootid;
    this.geolocation = geolocation;
    this.locatienaam = locatienaam;
    this.verblijfId  = verblijfId;
    this.id = id;
    this.dierengeluid = dierengeluid;
  }


}

export default Speurpunt;
