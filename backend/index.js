import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';


const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Trello Clone API is running live!');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )