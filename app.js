require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

//connectDB
const connectDB =require('./db/connect')
//routers
const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')

//error Handler
const NotFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

app.use(express.json());

//routes
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobRouter)

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)


app.get('/',(req,res)=>{
res.send('jobs api');
});

app.use(NotFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>
        console.log(`Server is listening on port${port}...`)
        
        );
    } catch (error) {
        console.log(error);
    }
};
start();