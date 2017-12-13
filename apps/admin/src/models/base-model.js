class BaseModel {


  /**
   * Return the model without empty objects
   */
  getPatchObject(){
    let patchObject = Object.assign({}, this);

    for (let propName in patchObject) {
      if (patchObject[propName] === null || patchObject[propName] === undefined) {
        delete patchObject[propName];
      }
    }

    return patchObject;
  }

}

export default BaseModel;
