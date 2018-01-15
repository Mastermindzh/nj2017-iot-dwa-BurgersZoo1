'use strict';

var app = require('../../server/server')

module.exports = function (Speurpunt) {
  Speurpunt.getAudio = function (id, cb) {
    Speurpunt.findOne({
      where: {_id: id},
      include: [{relation: 'weetjes'}, {relation: 'dierengeluid'}]
    }, function (err, result) {
      if (err) cb(err, null);
      if (result === undefined || result === null) {
        cb('empty result', null)
      } else {
        let speurpunt = result.toJSON();
        let weetjes = speurpunt.weetjes.map(function (x) {
          return x.bestandspad
        });

        app.models.Dierengeluid.findOne({where: {speurpuntId: id}}, function (err, result) {
          if (err) cb(err, null);
          if (result === undefined || result === null) {
            cb('empty result', null)
          } else {
            let dierengeluid = result.toJSON();

            let response = {weetjes: weetjes, dierengeluid: dierengeluid.bestandspad};
            cb(null, response);
          }
        });
      }
    });
  };

  Speurpunt.remoteMethod('getAudio', {
    description: 'Het opvragen van de audiobestanden die gelinkt zijn aan een speurpunt. Hier gaat het om weetjes en dierengeluiden.',
    accepts: {arg: 'id', type: 'string', http: {source: 'path'}},
    http: {path: '/:id/getAudio', verb: 'get'},
    returns: {errorStatus: '500', arg: 'speurpuntid', type: 'Object', root: true}
  });
};
