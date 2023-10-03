import express from 'express'
import cors from 'cors'
//import bodyParser from 'body-parser';
import roomrouter from './Routers/hallbooking.router.js';


const app=express();
const PORT=4000

app.use(cors())
app.use(express.json())
//app.use(bodyParser.json())
app.use('/api/room',roomrouter)
app.use('/api/booking',roomrouter)


app.listen(PORT,()=>{
    console.log("App is listening -",PORT);
})