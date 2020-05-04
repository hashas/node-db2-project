// Update with your config settings.

module.exports = {

  client: 'sqlite3', // specifying the DBMS
  connection: {
    filename: "./data/cars.db3" // location of database file
  },
  useNullAsDefault: true // a flag required for SQLite

};
