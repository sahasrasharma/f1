import express from 'express';
import cors from 'cors';
import {MongoClient} from 'mongodb';

const app = express();
app.use(cors());  //Enable Cross Origin
app.use(express.json()); //Enable JSON for transactions

const url = "mongodb+srv://kpn5848:Pwd100619@cluster0.ecszaax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});

//Testing Service
app.get("/", async (req, res)=>{
    res.status(200).json("Hello World from Express JS");
});

//SIGN UP OPERATION
app.post("/signup", async (req, res)=>{
    res.status(200).json(req.body);
});