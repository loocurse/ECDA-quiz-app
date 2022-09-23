import fs from "fs";
import csvWriter from "csv-write-stream";
import * as dfd from "danfojs-node";
import { Conv2DBackpropFilter } from "@tensorflow/tfjs-node";

// import csvAppend from 'csv-append'
// import json2csv from 'json2csv';

const DATABASE_FILE = './backend/csv-related/Database.csv';

function null_cleaner(key, value) {
    return value === null ? '' : value
}

// EXAMPLE taken from the app
// const response = {
//     "year": 2021,
//     "term": 4,
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
//     "response" :{"Arts":[{"question":"Enjoys singing","response":1},{"question":"Sings simple songs to pitch","response":1},{"question":"Responds rhythmically to music","response":1},{"question":"Participates keenly in musical activities","response":"Not Assessed"},{"question":"Enjoys painting","response":"Very Good"},{"question":"Enjoys drawing / colouring","response":"Not Assessed"},{"question":"Produces creative and original work","response":"Not Assessed"},{"question":"Enjoys role-play","response":"Not Assessed"},{"question":"Makes believe with objects and situations","response":"Not Assessed"},{"question":"Commendable Areas observed:","response":"Not Assessed"},{"question":"Areas of potential in this category","response":"Not Assessed"},{"question":"Suggested areas for parents to positively encourage \nat home","response":"Not Assessed"},{"question":"Enjoys mark-making","response":"Not Assessed"}]
//     }
// }

function save(df) {
    dfd.toCSV(df, {filePath: DATABASE_FILE});
}

/* Cleanest insert
    Least problematic, but assumes no duplicate
    Assumes that the file already exists with appropriate structure
*/
export function insert(response) {
    const line = {
        "YEAR": response.year, 
        "TERM": response.term,
        "TEACHER ID": response.teacher.id,
        "TEACHER NAME": response.teacher.name,
        "CLASS": response.class,
        "STUDENT NAME": response.student.name,
        "STUDENT ID": response.student.id,
        "DOB": response.student.dob,
        "DOMAIN": response.category,
        "SUB CATEGORY": '', // SKILL
        "SKILL": '', // SUB CATEGORY
        "SCORE": '', // SCORE
        "COMMENT": '', // CONTENT
    };  

    // Create writing pipes 
    const writer = csvWriter({sendHeaders:false});
    writer.pipe(fs.createWriteStream(DATABASE_FILE, {flags: 'a'}));
    
    for (var subCat in response.response) {
        const questions = response.response[subCat];
        line["SUB CATEGORY"] = subCat;
        console.log(subCat);
        console.log(questions)
        for (var question in questions) {
            line["SKILL"] = questions[question]['question'];
            if (typeof questions[question]['response'] == "number") {
                line["SCORE"] = questions[question]['response'];
                line["COMMENT"] = '';
            } else {
                line["COMMENT"] = questions[question]['response'];
                line["SCORE"] = '';
            }
            // const csv = '\n' + line.join(',');
            // console.log(csv)
            writer.write(line);
        }
    }
    // close connection to csv
    writer.end();
}

export async function findEntries(res) {
    const expected = {
        'year': 'number',
        'term': 'number',
        'teacher_id': 'string',
        'student_id': 'string',
        'category': 'string'
    }
    const df = await dfd.readCSV(DATABASE_FILE)
    const data = {
        "YEAR": res.year,
        "TERM": res.term,
        "TEACHER ID": res.teacher_id,
        "STUDENT ID": res.student_id,
        "DOMAIN": res.category
    } 
    console.log(res.year)
    // df.print();
    const condition = df["YEAR"].eq(res.year).and(
        df["TERM"].eq(res.term)).and(
            df["TEACHER ID"].eq(res.teacher_id)
        ).and(
            df["STUDENT ID"].eq(res.student_id)
        ).and (
            df["DOMAIN"].eq(res.category)
        )
        // df["TEACHER ID"].eq(res.teacher.id).and(
        // df["STUDENT ID"].eq(res.student.id).and(
        // df["DOMAIN"].eq(res.domain)))));
    // console.log(condition)
    const newDf = df.loc({rows: condition, columns: ["SUB CATEGORY", "SKILL", "SCORE", "COMMENT"]}); // , columns: ["SUB CATEGORY", "SKILL", "SCORE", "COMMENT"]
    // newDf.print();
    // console.log(newDf.shape)
    const result = dfd.toJSON(newDf);
    // console.log(result)
    // console.log(Array.isArray(result))
    const finalJson = {}
    for (var question in result) {
        console.log(result[question])
        if (!finalJson.hasOwnProperty(result[question]['SUB CATEGORY'])){
            finalJson[result[question]['SUB CATEGORY']] = []
        }
        finalJson[result[question]['SUB CATEGORY']].push({
            SKILL: result[question].SKILL,
            SCORE: result[question].SCORE,
            COMMENT: result[question].COMMENT
        });
    }
    return finalJson;
    // console.log("RESULT");
    // console.log(finalJson);
}

export async function deleteEntries(res) {
    const expected = {
        'year': 'number',
        'term': 'number',
        'teacher_id': 'string',
        'student_id': 'string',
        'domain': 'string'
    }
    const df = await dfd.readCSV(DATABASE_FILE)
    const data = {
        "YEAR": res.year,
        "TERM": res.term,
        "TEACHER ID": res.teacher.id,
        "STUDENT ID": res.student.id,
        "DOMAIN": res.domain
    } 
    console.log(res.year)
    // df.print();
    const condition = df["YEAR"].eq(res.year).and(
        df["TERM"].eq(res.term)).and(
            df["TEACHER ID"].eq(res.teacher.id)
        ).and(
            df["STUDENT ID"].eq(res.student.id)
        ).and (
            df["DOMAIN"].eq(res.category)
        )
        // df["TEACHER ID"].eq(res.teacher.id).and(
        // df["STUDENT ID"].eq(res.student.id).and(
        // df["DOMAIN"].eq(res.domain)))));
    // console.log(condition)
    const newDf = df.loc({rows: condition}).index;
    console.log("Found new df")
    df.print()
    console.log(newDf)
    const savingDf = df.drop({index: newDf})
    console.log("Createed to save")
    // console.log(newDf);
    // newDf.print();
    console.log(savingDf.shape)
    await save(savingDf)
    return savingDf;
}

export async function updateEntries(res) {
    const df = await deleteEntries(res)
    await insert(res)
}

// findEntries(response);
// insert(response);
// updateEntries(response);
// deleteEntries(response)