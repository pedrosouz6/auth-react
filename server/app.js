const express = require("express");
//const cors = require("cors");
const app = express();

//database
//const { connect } = require("./connection/connect");

//Using the dependencies
//app.use(cors());
app.use(express.json())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Producer

//getting all database user
app.get("/all/user/producer", (req, res) => {
    const sql = "SELECT * FROM producer_user";
    // connect.query(sql, (err, results) => {
    //     res.send({data: results});
    // })
    res.send("Oi")
})

//adding user in database 
app.post("/add/user/producer", (req, res) => {
    const { 
        firstName, 
        secondName,
        email,
        password,
        state,
        city,
        district,
        street,
        number
    } = req.body;

    const sql = `INSERT INTO producer_user (pdc_first_name, pdc_second_name, pdc_email, pdc_password, pdc_state, pdc_city, pdc_district, pdc_street, pdc_number) VALUES ('${firstName}', '${secondName}', '${email}', '${password}', '${state}', '${city}', '${district}', '${street}', '${number}')`;

    // connect.query(sql, (err, results) => {
    //     if(results) res.send({message: "Seu cadastro foi adicionado com sucesso"});    
    // })
    
    
    //console.log(firstName, secondName, email, password, state, city, district, street, number);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Consumer

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.listen(3333);