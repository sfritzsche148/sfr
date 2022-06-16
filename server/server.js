const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/anfragen', (req,res) => {
    res.send('Liste von allen Anfragen');
})

app.post('/addAnfrage', (req,res) => {
    const ADD_Query  = `Insert Into anfragen_database.anfragen (name) values (${req.body.name})`;
    connection.query(ADD_Query, (err)=>{
        if(err) console.log(err)
        else res.send('Anfrage wurde gesendet')
    })
    res.send('Du kannst Anfragen hinzufügen');
})

app.listen(3307, ()=> {
    console.log('running on port 3307');
})

