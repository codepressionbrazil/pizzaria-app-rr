const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const person = {
    address : {
        description: "",
        district: "",
        number: "",
        street: "",
    },
    borderFlavor: "",
    delivery: Boolean,
    drinks: {
        coca: Boolean,
        guarana: Boolean
    },
    email: "",
    flavors: [""],
    person: "",
    phone: "",
    size: ""
}


app.use(express.static('./public'));

app.get("/pedido", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido.html"))
});

app.get("/confirma", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/confirma.html"))
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"))
})

app.post("/pedido", (req, res) => {
    person.address.description = req.body.address.description;
    person.address.district = req.body.address.district;
    person.address.number = req.body.address.number;
    person.address.street = req.body.address.street;
    person.borderFlavor = req.body.borderFlavor;
    person.delivery = req.body.delivery;
    person.drinks.coca = req.body.drinks.coca;
    person.drinks.guarana = req.body.drinks.guarana;
    person.email = req.body.email;
    person.flavors = req.body.flavors;
    person.person = req.body.person;
    person.phone = req.body.phone;
    person.size = req.body.size;
    console.log("PERSON", person);
    res.redirect("/confirma");
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});




