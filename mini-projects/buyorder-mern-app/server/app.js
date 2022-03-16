const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { DB_URL } = require('./constants'); 
const buyOrders = require('./routes/buyOrders');
 
const app = express();

// Connecting with local MongoDB with URL, setting useNewUrlParser to true to avoid warning 
mongoose.connect(DB_URL, {useNewUrlParser:true});
const con = mongoose.connection;
con.on('open', ()=>{
    console.log('DB Connected...');
});

// Application Middlewares
app.use(cors());
app.use(express.json());
 
app.use('/buyOrders', buyOrders);
 
// Port Configuration
app.listen(5000, ()=>{
    console.log('API is running on port 5000...');
});