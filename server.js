const express = require("express")
const bp = require("body-parser")
const http = require("http")
const router = require("./routing");
const cors = require('cors');

const app = express()

app.use(bp.json())
app.use(cors());

const server = http.createServer(app)


app.use('/api' ,router);

app.get("/", (req, res) =>{
    res.send("this is default page on node express api")
})
server.listen(3000, ()=>{
    console.log(`Server is running on host port `);
}) 