/*
    THESE ARE DONE USING FRONTEND LIBS CANNOT BE USED IN BACKEND
*/

import fs from 'fs';
import initSqlJs from 'sql.js';

const DATABASE_FILE = 'test.sqlite'

export function connect() {
    const filebuffer = fs.readFileSync(DATABASE_FILE);
    initSqlJs().then(function(SQL){
        const db = new SQL.Database(filebuffer);
    })
    return db;
}

export function saveAndClose(db) {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DATABASE_FILE, buffer);
}

