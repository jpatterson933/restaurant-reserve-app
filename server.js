const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        routeName: "/tables",
        customerName: "",
        phoneNumber: "",
        customerEmail: "customerID",
    }
]

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));