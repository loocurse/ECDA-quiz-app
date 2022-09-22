import sqlite3 from "sqlite3";
import { connect, close } from "./setup.js";

// EXAMPLE taken from the app
const response = {
    "year": 2022,
    "term": 1,
    "class": "K2",
    "student": {
        "name": "Rachel Lee",
        "id": "S0001",
        "dob": "15-Jun-16"
    },
    "teacher": {
        "id": "T001",
        "name": "MRS LINDA TAN"
    },
    "category": "AESTHETIC AND CREATIVE EXPRESSION",
    "response" :{"Music and Movement, Art and Craft, Dramatic Play":[{"question":"Enjoys singing","response":"Not Assessed"},{"question":"Sings simple songs to pitch","response":"Not Assessed"},{"question":"Responds rhythmically to music","response":"Not Assessed"},{"question":"Participates keenly in musical activities","response":"Not Assessed"},{"question":"Enjoys painting","response":"Very Good"},{"question":"Enjoys drawing / colouring","response":"Not Assessed"},{"question":"Produces creative and original work","response":"Not Assessed"},{"question":"Enjoys role-play","response":"Not Assessed"},{"question":"Makes believe with objects and situations","response":"Not Assessed"},{"question":"Commendable Areas observed:","response":"Not Assessed"},{"question":"Areas of potential in this category","response":"Not Assessed"},{"question":"Suggested areas for parents to positively encourage \nat home","response":"Not Assessed"},{"question":"Enjoys mark-making","response":"Not Assessed"}]
    }
}

function prepareLine(response) {
    const line = [
        response.year,
        response.term,
        response.teacher.id,
        response.teacher.name,
        response.class,
        response.student.name,
        response.student.id,
        response.student.dob,
        response.category,
        null, // idx 9 | SUB CATEGORY
        null, // SKILL
        null, // SCORE
        null // COMMENT
    ]
    for (var subCat in response.response) {
        const questions = response.response[subCat];
        line[9] = subCat;
        console.log(subCat);
        console.log(questions)
        for (var question in questions) {
            line[10] = questions[question]['question'];
            if (typeof questions[question]['response'] == "number") {
                line[11] = questions[question]['response'];
                line[12] = null;
            } else {
                line[12] = questions[question]['response'];
                line[11] = null;
            }
            console.log(line);
        }
    }
}

export function readAll() {
    const db = connect();
    db.all(`SELECT * FROM responses`, [], (err, rows) => {
        if (err) console.error(err.message);
        rows.forEach((row) => {
            console.log(row)
        })
        console.log("Current length of db", rows.length);
    })
    close(db);
}

export function insert(response) {
    const db = connect();
    const DB_COMMAND = `
        INSERT INTO responses (
            year,
            term,
            teacher_id,
            teacher_name,
            class,
            student_name,
            student_id,
            dob,
            domain,
            sub_category,
            skill,
            score,
            comment
        ) VALUES (
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )`
        const line = [
            response.year,
            response.term,
            response.teacher.id,
            response.teacher.name,
            response.class,
            response.student.name,
            response.student.id,
            response.student.dob,
            response.category,
            null, // idx 9 | SUB CATEGORY
            null, // SKILL
            null, // SCORE
            null // COMMENT
        ]
        for (var subCat in response.response) {
            const questions = response.response[subCat];
            line[9] = subCat;
            // console.log(subCat);
            // console.log(questions)
            for (var question in questions) {
                line[10] = questions[question]['question'];
                if (typeof questions[question]['response'] == "number") {
                    line[11] = questions[question]['response'];
                    line[12] = null;
                } else {
                    line[12] = questions[question]['response'];
                    line[11] = null;
                }
                // console.log(line);
                db.run(DB_COMMAND, line, (err) => {
                    if (err) {
                        console.error(err.message);
                        return;
                    }
                    console.log("Inserted into db")
                })
            }
        }


    close(db);
}

export function resetTable() {
    const db = connect();

    db.run("DELETE FROM responses");

    close(db);
}

// insert(response);
// readAll();