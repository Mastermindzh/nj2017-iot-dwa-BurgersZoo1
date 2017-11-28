'use strict';
var app = require('../../server/server')
module.exports = function (Poot) {

  Poot.getconfig = function (pootid, cb) {
    app.models.Speurpunt.findOne({
      where: {pootid: pootid},
      include: [{relation: 'weetje'}, {relation: 'dierengeluid'}]
    }, function (err, result) {
      if (err) console.log(err);
      var temp = result.toJSON()
      var weetjes = temp.weetje.map(function(x){return x.bestandspad})
      var dierengeluid = temp.dierengeluid.bestandspad
      var response = {weetjes: weetjes, dierengeluid: dierengeluid};
      cb(null, response);
    });


  };


  Poot.sendLog = function (log, pootid, cb) {
    cb(null, 'Logging opgeslagen')
  };

  Poot.scan = function (pasid, pootid, cb) {
    cb(null, 'Bezoek succesvol')
  };

  Poot.updateProgress = function (transactieid, voortgang, cb) {
    cb(null, 'Progress update ontvangen.')
  };

  Poot.getSpeurpunt = function (cb) {
    Poot.find({fields: {pootid: true, id: false}}, function (err, poten) {
      if (err) console.log(err);
      var ids = poten.map(function (x) {
        return x.pootid
      })
      var pootid = ids.reduce(function (a, b) {
        return Math.max(a, b);
      })
      var response = {pootid: pootid + 1}
      cb(null, response)
    });

  };
  Poot.afterRemote('getSpeurpunt', function (ctx, result, next) {
    Poot.create(result, function (err, obj) {
      if (err) console.log(err);
      next();
    })
  });

  Poot.remoteMethod('getconfig', {
    description: 'Het opvragen van de configuratie van een specifieke poot.',
    accepts: {arg: 'pootid', type: 'number', http: {source: 'path'}},
    http: {path: '/:pootid/config', verb: 'get'},
    returns: {arg: 'pootid', type: 'Object', root: true}
  });

  Poot.remoteMethod('sendLog', {
    description: 'Verzenden van log-data naar de backend vanuit de gateway. Elk request bevat de logdata van 1 poot.',
    accepts: [{arg: 'log', type: 'logging', http: {source: 'body'}}, {
      arg: 'pootid',
      type: 'number',
      http: {source: 'path'}
    }],
    http: {path: '/:pootid/logs', verb: 'post'},
    returns: {arg: 'message', type: 'string', root: true}
  });

  Poot.remoteMethod('scan', {
    description: 'Verwerken van de ranger die bij een bepaalde poot komt. Wanneer een ranger een poot scant wordt het kaartid via de gateway naar de backend gestuurd. Dit is het endpoint in de backend die dit ontvangt.',
    accepts: [{arg: 'pasid', type: 'number', http: {source: 'body'}}, {
      arg: 'pootid',
      type: 'number',
      http: {source: 'path'}
    }],
    http: {path: '/:pootid/scan', verb: 'post'},
    returns: {arg: 'message', type: 'string', root: true}
  });

  Poot.remoteMethod('updateProgress', {
    description: 'Endpoint voor het updaten van de update voortang. Dit wordt door de gateway verzorgt en rekent uit hoever het versturen van de de configuratie naar de gateway is. Dit is alleen van toepassing op het moment dat er iets te updaten is. Niet alle update acties geven een transactie id terug.',
    accepts: [{arg: 'transactieid', type: 'number', http: {source: 'path'}}, {
      arg: 'voortgang',
      type: 'number',
      http: {source: 'body'}
    }],
    http: {path: '/poten/update/:transactieid', verb: 'put'},
    returns: {arg: 'message', type: 'string', root: true}
  });

  Poot.remoteMethod('getSpeurpunt', {
    description: 'Registreren van een nieuw poot. Response bevat het nieuw aangemaakte poot.',
    accepts: [],
    http: {path: '/new', verb: 'post'},
    returns: {arg: 'message', type: 'string', root: true}
  });

};
