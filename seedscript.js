const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const generateSeedData = require('./assets/generate-seed-data');
const DB_URL = 'mongodb://localhost:8009';
const DB_NAME = 'burgerszoo';

const dropDb = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(DB_URL, function (err, database) {
      assert.equal(null, err);
      database.db(DB_NAME).dropDatabase().then(() => {
        console.log('Database succesfully dropped');
        resolve();
      }).catch(() => {
        console.log('Skipped drop database (db does not exist)');
        reject();
      });
    });
  });
}

const dropDbPromise = dropDb();

dropDbPromise.then(() => {
  seedDatabase();
}).catch(() => console.log('ERROR: Could not drop database.'));

function seedDatabase() {
  // generateSeedData().forEach(collection => {
  //   collection.documents.forEach(document => {
  //     axios.post(collection.DB_URL, document);
  //   });
  // }); 
  console.log(generateSeedData())
}


