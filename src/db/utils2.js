/*
    THESE ARE DONE USING FRONTEND LIBS CANNOT BE USED IN BACKEND
*/

import fs from 'fs';
import initSqlJs from 'sql.js';
import { connect, saveAndClose } from './setup2.js';

export function readAll() {
    const db = connect();
    const res = db.exec("SELECT * from responses");
    saveAndClose(db);
    console.log(res);
}