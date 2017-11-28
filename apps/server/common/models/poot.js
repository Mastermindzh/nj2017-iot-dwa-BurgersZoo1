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
      var weetjes = temp.weetje.map(function (x) {
        return x.bestandspad
      })
      var dierengeluid = temp.dierengeluid.bestandspad
      var response = {weetjes: weetjes, dierengeluid: dierengeluid};
      cb(null, response);
    });
  };

  Poot.sendLog = function (log, pootid, cb) {
    console.log('in sendlog, id: ' + pootid);
    console.log('log: ' + JSON.stringify(log));
    var temp = log.toJSON()
    var logValues = temp.logValues
    console.log('logvalues: ' + logValues)
    var timestamp = log.toJSON().timestamp
    var response = {pootid: pootid, timestamp: timestamp, logValues: logValues}
    // todo sla data op in logging

    //todo hij neemt logvalues van log niet mee.
    cb(null, response)
  };

  Poot.afterRemote('sendLog', function (ctx, result, next) {
    console.log('in after remote: ' + result);
    app.models.Logging.create(result, function (err, obj) {
      if (err) console.log(err);
      console.log(obj)
      next(null, 'logging opgeslagen');
    })
  });

  Poot.scan = function (pasid, pootid, cb) {
    //todo make sure the request takes {pasid: 5} instead of just 5
    var rangerid = 0;
    var speurpuntid = 0;

    //zoek de ranger bij het pasid uit de request
    app.models.Pas.findOne({
      where: {pasid: pasid},
      include: {relation: 'ranger'}
    }, function (err, result) {
      if (err) console.log(err);
      rangerid = (result.toJSON()).ranger.id;

//zoek het speurpunt bij het pootid uit de request
      app.models.Speurpunt.findOne({
        where: {pootid: pootid}
      }, function (err, result) {
        if (err) console.log(err);
        speurpuntid = result.toJSON().id;
        //todo datum
        result = {rangerid: rangerid, speurpuntid: speurpuntid, datum: Date.now()};
        console.log('result:=====');
        console.log(result);
        cb(null, result);
      });
    })
  };

  Poot.afterRemote('scan', function (ctx, result, next) {
    console.log('in after remote scan');
    console.log('result: ' + JSON.stringify(result));
    app.models.RangerHeeftBezocht.create(result, function(err, obj){
      if(err) console.log(err);
      next(null, 'successful');
    })

  });

  Poot.updateProgress = function (transactieid, voortgang, cb) {
    cb(null, 'Progress update ontvangen.')
  };

  Poot.getPootid = function (cb) {
    Poot.find({fields: {pootid: true, id: false}}, function (err, poten) {
      if (err) console.log(err);
      var ids = poten.map(function (x) {
        return x.pootid
      });
      var pootid = ids.reduce(function (a, b) {
        return Math.max(a, b);
      });
      var response = {pootid: pootid + 1};
      cb(null, response)
    });

  };
  Poot.afterRemote('getPootid', function (ctx, result, next) {
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
    http: {path: '/update/:transactieid', verb: 'put'},
    returns: {arg: 'message', type: 'string', root: true}
  });

  Poot.remoteMethod('getPootid', {
    description: 'Registreren van een nieuw poot. Response bevat het nieuw aangemaakte poot.',
    accepts: [],
    http: {path: '/:pootid/new', verb: 'post'},
    returns: {arg: 'message', type: 'string', root: true}
  });

};
