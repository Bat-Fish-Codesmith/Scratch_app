const { Pool } = require('pg');

//insert elephant URI here
const PG_URI = 'postgres://zndfsdcu:QJza_1T-n0KVS_un59eO-9LTzDy4Ll_a@drona.db.elephantsql.com/zndfsdcu';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
