/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./apts.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    db.run("CREATE TABLE if not exists apt (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " address TEXT," +
        " floor INT," +
        " rooms REAL," +
        " sqrMtr REAL," +
        " parking INT," +
        " storage INT," +
        " arnona INT," +
        " vaad INT," +
        " price INT" +
        ")");

};

module.exports = {
    init: init,
    db: db
};


