const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const AuthorRoutes = require('./routes/author');
const BookRoutes = require('./routes/book');
const { createBook } = require('./controller/book');
require('dotenv').config();


const mongoURL = process.env.MONGDB_URL;
app.use(express.json())
// Ask the browser to allow resource sharing from different PORT Numbers
app.use(cors());

// Connect to Mongodb --------------------------------------------------------
mongoose.connect(mongoURL, (error) => {
    if (error) {
        console.error(`There was an error connecting database, ${error}`);
    } else {
        console.log("Succefully connected to Database");
    }
})
//-----------------------------------------------------------------------------

// Check on browser ------------------
app.get("/", (req, res) => {
    res.send("Hello mongodb !!");
})
//------------------------------------

app.use('/api/v1/authors', AuthorRoutes);
app.use('/api/v1/books', BookRoutes);


app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})