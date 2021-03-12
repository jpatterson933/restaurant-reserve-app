//grabs the two files we will be using 
//express provides us with the middleware to deal with the incoming data object in the body
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
// this sets our port at 3000
const PORT = 3000;

/*You NEED express.json() and express.urlencoded() for POST and PUT requests, 
because in both these requests you are sending data (in the form of some data object) 
to the server and you are asking the server to accept or store that data (object), 
which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//we creae an object that will store our reservation information into table objects
const tables = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID: "",
    },
]

//we create an object that will store the reservations that overflow from tables into a waitlist object
const waitList = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID: "", 
    }
]

// tables.filter((item, index) => index > 5 && item)

/* each app.get handles a different get request
the first part of the get request is the specified endpoint
when the app.get detetecs a response that matches the specified endpoints, it runs the callback function */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

                /* The res.sendFile() function basically transfers the file at the given path and it 
                sets the Content-Type response HTTP header field based on the filename extension.*/
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));  

                                              /*the path parameter defines the path. Here we take the file path from
                                              C and join it with tables.html file */
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

//when the response matches /api/tables, it will grab the tables parse through the data and return the response as json
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/reserve', (req, res) => res.json(waitList));

//this is our post request  that will run a callback function to make newReservations when the req.body receives data
app.post('/api/tables', (req, res) => {
   
    const newReservation = req.body;

  //if our tables length is greater to four, it will push any new reservations into the waitlist
    if(tables.length > 4 ) {
        waitList.push(newReservation)
        res.json(waitList)
    }
    else {
        tables.push(newReservation);
        res.json(tables);
    }
  });

//this makes sure, using express, that the defined PORT is being listedn to and we console log that to make sure the server is running
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));