const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './src/csv-related/Database.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'}
    ]
});

// taken from the app
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


