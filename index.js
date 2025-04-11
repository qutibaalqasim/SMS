import express from 'express';
import 'dotenv/config';
import initApp from './src/index.router.js';

const app = express();
app.use(express.json());

initApp(app);



app.listen(3000,()=>{
    console.log('Server started on port 3000....');
})