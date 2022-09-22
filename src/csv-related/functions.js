import fs from "fs";
import { parse } from "csv-parse";
import {stringify} from "csv-stringify";

fs.createReadStream("./src/csv-related/Database.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
    stringify(row, {
      header: false
    }, function (err, output) {
        console.log("OUTPUT!!");
        console.log(output);
        console.log('\n\n');
        if (err) {
          console.error('Could not stringify before appending data to csv');
          
        } else {
          fs.appendFile("./src/csv-related/test.csv", output, (err) => {
            if (err) console.error('Could not append data to csv');
            console.log('Data successfully appended');
          });
        }
    })
  })
  .on("end", function () {
    console.log("finished reading data!");
  })
  .on("error", function (error) {
    console.log(error.message);
  });

// stringify(someData, {
//     header: true
// }, function (err, output) {
//     if (err) {
//       console.error('Could not stringify before appending data to csv');
      
//     } else {
//       fs.appendFile("./src/csv-related/test.csv", output, (err) => {
//         if (err) console.error('Could not append data to csv');
//         console.log('Data successfully appended');
//       });
//     }
// })