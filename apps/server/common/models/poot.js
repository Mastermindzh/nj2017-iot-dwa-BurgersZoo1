'use strict';
var app = require('../../server/server')
module.exports = function (Poot) {

  Poot.scan = function (pasid, pootid, cb) {
    var rangerid = 0;
    var speurpuntId = 0;

    //zoek de ranger bij het pasid uit de request
    app.models.Pas.findOne({
      where: {pasid: pasid},
      include: {relation: 'ranger'}
    }, function (err, result) {
      if (err) cb(err, null);
      if (result === undefined || result === null) {
        cb('empty result', null)
      }
      else {
        rangerid = (result.toJSON()).ranger.id;
        //zoek het speurpunt bij het pootid uit de request
        app.models.Speurpunt.findOne({
          where: {pootid: pootid}
        }, function (err, result) {
          if (err) cb(err, null);
          if (result === undefined || result === null) {
            cb('empty result', null)
          } else {
            speurpuntId = result.toJSON().id;
            result = {rangerid: rangerid, speurpuntId: speurpuntId, datum: Math.floor(new Date() / 1000)};
            cb(null, result);
          }
        });
      }
    })
  };

  Poot.afterRemote('scan', function (ctx, result, next) {

    app.models.RangerHeeftBezocht.create(result, function (err, obj) {
      if (err) next(err, null);
      next(null, 'successful');
    })

  });

  Poot.getPootid = function (cb) {
    Poot.find({fields: {pootid: true, id: false}}, function (err, poten) {
      if (err) cb(err, null);
      var ids = poten.map(function (x) {
        return x.pootid
      });
      //zoek de hoogste id van alle poten en doe +1, dit zorgt voor een unieke id.
      var pootid;
      if (ids.length <1) {
        pootid = 0;
      } else {
        pootid = ids.reduce(function (a, b) {
          return Math.max(a, b);
        });
      }
      var response = {pootid: pootid + 1};
      cb(null, response)
    });

  };
  Poot.afterRemote('getPootid', function (ctx, result, next) {
    Poot.create(result, function (err, obj) {
      if (err) next(err, null);
      next();
    })
  });


  Poot.remoteMethod('scan', {
    description: 'Verwerken van de ranger die bij een bepaalde poot komt. Wanneer een ranger een poot scant wordt het kaartid via de gateway naar de backend gestuurd. Dit is het endpoint in de backend die dit ontvangt.',
    accepts: [{arg: 'pasid', type: 'number', http: {source: 'body'}}, {
      arg: 'pootid',
      type: 'number',
      http: {source: 'path'}
    }],
    http: {errorStatus: '500', path: '/:pootid/scan', verb: 'post', status: 201},
    returns: {arg: 'message', type: 'string', root: true}
  });


  Poot.remoteMethod('getPootid', {
    description: 'Registreren van een nieuw poot. Response bevat het nieuw aangemaakte poot.',
    accepts: [],
    http: {errorStatus: '500', path: '/new', verb: 'post', status: 201},
    returns: {arg: 'message', type: 'string', root: true}
  });
};
