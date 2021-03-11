const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID: "",
    },
]

const waitList = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID: "", 
    }
]
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/reserve', (req, res) => res.json(waitList));

app.post('/api/tables', (req, res) => {
   
    const newReservation = req.body;
  
    if(tables.length > 4 ) {
        waitList.push(newReservation)
        res.json(waitList)
    }
    else {
        tables.push(newReservation);
        res.json(tables);
    }
  });


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));