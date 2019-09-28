
const express = require("express")
const path = require("path")
const security = require("./security")

var app = express();


app.get("/findPerson/:id", security.authentication, function(req, res) {


    console.log("findPerson Started")

 
    let idParam = req.params.id

    console.log("idParam: " + idParam)

    if (idParam == "123") {

        console.log("findPerson Found")

        let person = {
            id: "123",
            name: "Tom",
            bankAccountNumber: "112233",
            age: 190,
            places: [
                {
                    name: "Here"
                }
            ]
        }
    
        res.status(200);
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Magic", "xxyyzz")
        
    
        res.end(JSON.stringify(person))

    }   
    else {

        res.status(404);
        res.setHeader("Content-Type", "application/json")
        
    
        let error = {
            msg: "Person not found"
        }
        res.end(JSON.stringify(error))

    }

    console.log("findPerson complete")



});

app.get("/", function(req, res) {

    res.status(200);

    res.sendFile(path.join(__dirname, './public', 'index.html'));


})


app.listen(3000)

console.log("Server Started")