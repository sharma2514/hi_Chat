const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

const db = require('./config/mongoose');

app.use(express.static('./assets'));
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));


// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`)
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
