const express = require("express")
const bp = require("body-parser")
const http = require("http")

const app = express()

app.use(bp.json())

const server = http.createServer(app)

app.get("/", (req, res) =>{
    res.send("this is default page on node express api")
})

app.get("/todos", (req, res)=> {
    res.send("this is todo page for node express api")
})


server.listen(3000, '192.168.100.170', ()=>{
    console.log(`Server is running on host port `);
})