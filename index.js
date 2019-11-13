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

app.post('/comments', (req,res)=>{
    let newComment = {
        _id: comments.length + 1,
        body: req.body,
        postId: 1
    }
    comments.push(newComment)
    return res.json(newComment)
})

app.post('/contacts', (req,res)=>{
    let newContact = {
        _id: contacts.length + 1,
        name: req.body,
        occupation: req.body,
        avatar: req.body,
        postId: 1
    }
    contacts.push(newContact)
    return res.json(newContact)
})

app.post('/products', (req,res)=>{
    let newProduct = {
        _id: products.length + 1,
        name: req.body,
        description: req.body,
        postId: 1
    }
    products.push(newProduct)
    return res.json(newProduct)
})

app.post('/vehicles', (req,res)=>{
    let newVehicle = {
        _id: vehicles.length + 1,
        year: req.body,
        make: req.body,
        model: req.body,
        postId: 1
    }
    vehicles.push(newVehicle)
    return res.json(newVehicle)
})

app.use(express.static("public"));
app.use(bodyParser.json());

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
