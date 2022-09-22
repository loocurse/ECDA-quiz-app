import fs from "fs";
import csvWriter from "csv-write-stream"
// import csvAppend from 'csv-append'
import json2csv from 'json2csv';

function null_cleaner(key, value) {
    return value === null ? '' : value
}

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

function update(response) {
    const DATABASE_OUT = './src/csv-related/test.csv';
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
    writer.pipe(fs.createWriteStream(DATABASE_OUT, {flags: 'a'}));
    
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

// update(response);
export default update;