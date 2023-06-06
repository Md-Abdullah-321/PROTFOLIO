const dotenv = require('dotenv');
const express = require('express');
const app = express();

//Connection to dotenv File:
dotenv.config({path:'./config.env'});
require('./db/connection');


//Cookie Parser:
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Middleware:
app.use(require('./router/userRouter'));
app.use(require('./router/adminRouter'));
app.use(express.json()); 



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at Port no ${PORT}`);
})