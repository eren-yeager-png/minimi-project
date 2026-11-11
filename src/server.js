import "dotenv/config"
import express from "express"

const app = express()
const port = process.env.port  // importing from .env file that contains port num
app.get("/",(req,res)=>{
    res.send(`hello world`)
})
app.listen(port,()=>{
    console.log(`running on http://localhost:${port}.`)
})