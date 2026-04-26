const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {people} = require("./__stubs__/people.json");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.get('/', (req, res) => {
    res.send('HomePage');
});

app.get('/people', async (req, res) => {
    res.json(people);
});

app.get('/people/:id', async (req, res) => {
    const param = req.params;
    const query = req.query;
    res.json(people[param.id - 1]);
});

app.post('/people', async (req, res) => {
    const query = req.query;
    res.send(`Created ${req.body?.firstName}`);
});

app.put('/people/:id', (req, res) => {
    res.send('Updated person');
});

app.delete('/people/:id', (req, res) => {
    res.send('Deleted person');
});

app.patch('/people/:id', (req, res) => {
    const query = req.query;
    res.send("Updated request");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
