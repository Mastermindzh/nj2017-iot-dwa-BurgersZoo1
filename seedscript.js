'use strict';
var request = require("request");
var sys = require('util');
var exec = require('child_process').exec;
const AANTALPOTEN = 6;
const DB_HOST = 'localhost:8009';
const HOST = 'http://localhost:8001';

seedEverything();

function seedEverything() {
  return new Promise(function (resolve, reject) {
    // Maak de datbase leeg
    function puts(error, stdout, stderr) {
      resolve(stdout)
    }

    exec("mongo burgerszoo --eval 'db.dropDatabase()' --host " + DB_HOST, puts);
  }).then(() => {
    //Maak poten aan
    return new Promise(function (resolve, reject) {
      var optionsPoten = {
        method: 'POST',
        url: HOST + '/api/poten/new',
        headers:
          {
            'postman-token': '2321c320-15be-c0fc-789c-6f58ab40e387',
            'cache-control': 'no-cache',
            accept: 'application/json',
            'content-type': 'application/json'
          }
      };
      var poten = [];
      for (let i = 0; i < AANTALPOTEN; i++) {
        poten.push(maakPoot());
      }
// todo dit moet denk ik synchroon gebeuren, anders heb je overal pootid 1, of de fout zit in de for loop hierboven
      function maakPoot() {
        return new Promise(function (resolve, reject) {
          request(optionsPoten, function (error, response, body) {
            if (error) {
              reject(error);
            }
            console.log(body);
            resolve(body);
          });
        })
      }

      Promise.all('poten').then(result => {
        resolve(result); //todo
      })
    })

  }).then(poten => {
    console.log('then')
    //todo
    /*
    Maak een speurpunt aan voor elke poot die je hebt met de id's die je terug krijgt van poten promise.
    Maak passen aan, met de specifieke id's uit de curl request. (rare id's die iot gebruikt om op de passen te zetten)
    Koppel een ranger aan elke pas, met de id uit pas model die je terug krijgt van bovenstaande request
    Maak dierengeluiden aan
    Maak weetjes aan.
    Koppel weetjes en dierengeluiden via de id's die je terug krijgt aan speurpunten
     */
  }).catch(err => {
    console.log(err);
  })
}


