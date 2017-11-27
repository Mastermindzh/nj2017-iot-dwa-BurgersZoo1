'use strict';

module.exports = function(Dog) {

  Dog.getOwner = function(dog, name, cb){
    cb(null, "This dog's owner is: "+name)
  };

  Dog.remoteMethod('getOwner',{
    description: 'Shows the owner of the dog',
    accepts: [{arg: 'dog', type: 'number', http:{source: 'path'}}, {arg:'name', type: 'string'}],
    http: {path: '/:dog/owner', verb:'get'},
    returns: {arg: 'result', type: 'string'}
  });

};
