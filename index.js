const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let comments = require("./data/comments");
let contacts = require("./data/contacts");
let products = require("./data/products");
let vehicles = require("./data/vehicles");

app.get('/comments', (req,res)=>{
    return res.json(comments);
});
app.get('/contacts', (req,res)=>{
    return res.json(contacts);
});
app.get('/products', (req,res)=>{
    return res.json(products);
});
app.get('/vehicles', (req,res)=>{
    return res.json(vehicles);
});

app.get('/comments/:id', (req,res)=>{
    let comment = comments.find(e => e._id == req.params.id)
    return res.json(comment);
});
app.get('/contacts/:id', (req,res)=>{
    let contact = contacts.find(e => e._id == req.params.id)
    return res.json(contact);
});
app.get('/products/:id', (req,res)=>{
    let product = products.find(e => e._id == req.params.id)
    return res.json(product);
});
app.get('/vehicles/:id', (req,res)=>{
    let vehicle = vehicles.find(e => e._id == req.params.id)
    return res.json(vehicle);
});

app.use(express.static("public"));
app.use(bodyParser.json());

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
