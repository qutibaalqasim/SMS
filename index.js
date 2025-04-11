import express from 'express';
import 'dotenv/config';
import initApp from './src/index.router.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

initApp(app);



app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}....`);
})