const express = require("express");
const db = require("./data");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get("/api/getData", (req, res) => {
    const skip = req.query.skip
    const take = req.query.take
    const { data } = db   
    const fragmentData = data.slice(skip, parseInt(take) + parseInt(skip))
    const total = data.length
    res.json({
        data: fragmentData, 
        total
    })
})

const port = 3001;
app.listen(port, () => {
    console.log(`Server runnig at ${port}`);
})