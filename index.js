const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
// moves the data from the front to the back and vice versa
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
// hopefully connects to the mong DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact');

app.listen(PORT, ()=>{
    console.log("It's listening on PORT " + PORT);
})