# ECDA Quiz Application

## Instructions

To run,

```
yarn dev
```

To build,

```
yarn build
```

## Backend instructions
To run,
`node backend/server.js`  
OR  
```
chmod +x server.sh # ensure it is executable
./server.sh
```  
It runs on port 3000 on localhost by default  
You will probz need to edit the CORS policy for security  
The csv used as database is Database.csv  

### Common errors
- Make sure the csv has at least the headers and 1 row of entries
- Make sure there are no commas in any entries, there will be issues

### Additional Features
- If you want to have textual input, you may use the same functions, except with score as empty string '' and comment that is filled. This should work just like that. AGAIN, you have to escape the comma characters yourself because I did not account for that
- If you want the app load up the teacher's last input on the react app, you may do so, I have written the getPrevVals function in Evaluation.jsx to help you. You can just use the finalJson.
- If you want to make the term/ teacher/ student/ year dynamic, you can make the fetch request dynamic