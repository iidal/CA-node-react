const { application } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const database = require("./database/crudrepository.js");

app.use(express.static("public"));
app.use(express.json());


app.get("/api/locations", function (req, res) {
    res.json(database.findAll());
});

app.get("/api/locations/:id([0-9]+)", function (req, res) {
    let id = Number(req.params.id);
    let loc = database.findById(id)
    if (loc) {
        res.json(loc);
    }
    res.status(404);
    res.end();
});

app.delete("/api/locations/:id([0-9]+)", function (req, res) {
    let id = Number(req.params.id);
    let success = database.deleteById(id);
    if (success) {
        res.status(204);
        res.end();
    }
    else {
        res.status(404);
        res.end();
    }
});


app.post("/api/locations", (req, res) => {
    res.status(201);
    res.send(database.add(req.body));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});