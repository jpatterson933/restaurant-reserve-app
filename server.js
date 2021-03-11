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