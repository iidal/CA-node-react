const http = require("http");
const express = require('express')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));


let customers = [{ id: 1, name: "jack" }, { id: 2, name: "jack" }];

//http get 
app.get('/customers', function (req, res) {
    res.send(customers)
})
app.listen(port, () => { console.log("listening port") })
app.listen(3000)