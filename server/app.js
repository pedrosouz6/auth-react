const express = require("express");
const cors = require("cors");
const app = express();

const { connect } = require("./connection/connection");

app.use(cors());
app.use(express.json());


app.post("/add/user", (req, res) => {
    const { email, password } = req.body;
    const sql = `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`;
    connect.query(sql, (error, results) => {
        if(results){
            console.log("Adicionado")
        } 
    })
});

app.get("/get/users", (req, res) => {
    const sql = "SELECT * FROM users";
    connect.query(sql, (error, results) => {
        if(results){
            res.send({ results });
        }
    })
})

app.listen(4000);