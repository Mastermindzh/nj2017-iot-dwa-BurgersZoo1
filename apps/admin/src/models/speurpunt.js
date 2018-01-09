import BaseModel from './base-model';

class Speurpunt extends BaseModel{

  poten;
  geolocation;
  locatienaam;
  verblijfId;
  id;
  dierengeluid;
  weetjes;

  constructor(pootid, geolocation, locatienaam, verblijfId, id = null, dierengeluid = null, weetjes = null ) {
    super();
    this.pootid = pootid;
    this.geolocation = geolocation;
    this.locatienaam = locatienaam;
    this.verblijfId  = verblijfId;
    this.id = id;
    this.dierengeluidId = dierengeluid;
    this.weetjes = weetjes;
  }

}

export default Speurpunt;
