/*
    THESE ARE DONE USING BACKEND LIBS CANNOT BE USED IN FRONTEND
*/

import sqlite3 from "sqlite3";

// const DATABASE_FILE = "./src/db/Database.db"
const DATABASE_FILE = "./src/db/test.sqlite"

// EXAMPLE taken from the app
// const response = {
//     "year": 2022,
//     "term": 1,
//     "class": "K2",
//     "student": {
//         "name": "Rachel Lee",
//         "id": "S0001",
//         "dob": "15-Jun-16"
//     },
//     "teacher": {
//         "id": "T001",
//         "name": "MRS LINDA TAN"
//     },
//     "category": "AESTHETIC AND CREATIVE EXPRESSION",
//     "response" :{"Music and Movement, Art and Craft, Dramatic Play":[{"question":"Enjoys singing","response":"Not Assessed"},{"question":"Sings simple songs to pitch","response":"Not Assessed"},{"question":"Responds rhythmically to music","response":"Not Assessed"},{"question":"Participates keenly in musical activities","response":"Not Assessed"},{"question":"Enjoys painting","response":"Very Good"},{"question":"Enjoys drawing / colouring","response":"Not Assessed"},{"question":"Produces creative and original work","response":"Not Assessed"},{"question":"Enjoys role-play","response":"Not Assessed"},{"question":"Makes believe with objects and situations","response":"Not Assessed"},{"question":"Commendable Areas observed:","response":"Not Assessed"},{"question":"Areas of potential in this category","response":"Not Assessed"},{"question":"Suggested areas for parents to positively encourage \nat home","response":"Not Assessed"},{"question":"Enjoys mark-making","response":"Not Assessed"}]
//     }
// }

export function close(db) {
    db.close((err) => {
        if (err) console.error(err.message);
        console.log("DB closed");
    })
}

export function connect() {
    const db = new sqlite3.Database(DATABASE_FILE, sqlite3.READWRITE, (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("Connected to db")
    })
    return db;
}

export function createFile() {
    const db = new sqlite3.Database(DATABASE_FILE, sqlite3.OPEN_READWRITE, (err) => {
        if (err) console.error(err.message);
        console.log("Connected to db")
    })
    // storing date as TEXT as ISO8601 strings ("YYYY-MM-DD HH:MM:SS.SSS").
    db.run(`CREATE TABLE IF NOT EXISTS responses(
        year INTEGER DEFAULT 2022,
        term INTEGER DEFAULT 1,
        teacher_id TEXT "T001",
        teacher_name TEXT DEFAULT "MRS LINDA TAN",
        class TEXT DEFAULT "K101",
        student_name TEXT NOT NULL,
        student_id TEXT NOT NULL,
        dob TEXT, 
        domain TEXT NOT NULL, 
        sub_category TEXT NOT NULL,
        skill TEXT NOT NULL,
        score INTEGER,
        comment TEXT
    )`);
}
