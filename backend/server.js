import express from 'express';
// import { insert } from './csv-related/utils.js';
import { updateEntries, deleteEntries, insert, findEntries } from './csv-related/utils.js';

const app = express()
const port = 3000
app.use(express.json())

app.post('/simpleInsert', (req, res) => {
    console.log(req.body);
    insert(req.body);

    res.status(200).send("Done with simple insert");
})

app.get('/findEntries', async function(req, res) {
    const finalJson = await findEntries(req.body)
    console.log(finalJson);
    console.log('HEREHRJEWHE');
    res.json(finalJson);
})

app.put('/updateEntries', (req, res) => {
    const finalJson = updateEntries(req.body);
    res.status(200).send("Updated!");
})
app.delete('/deleteEntries', (req, res) => {
    const finalJson = deleteEntries(req.body);
    res.status(200).send("Deleted!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})