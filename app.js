require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

//error Handler
const NotFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

app.use(express.json());

//routes
app.get('/',(req,res)=>{
res.send('jobs api');
});

app.use(NotFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async()=>{
    try {
        app.listen(port,()=>
        console.log(`Server is listening on port${port}...`)
        
        );
    } catch (error) {
        console.log(error);
    }
};
start();