import BaseModel from './base-model';

class Dierengeluid extends BaseModel{

  id;
  bestandspad;
  beschrijving;
  speurpuntId;

  constructor(id, bestandspad, beschrijving, speurpuntId) {
    super();
    this.id = id;
    this.bestandspad = bestandspad;
    this.beschrijving = beschrijving;
    this.speurpuntId  = speurpuntId;
  }


}

export default Dierengeluid;
