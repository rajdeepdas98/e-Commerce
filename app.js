const express = require('express');
const serverConfig = require('./configs/server.config');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = require("./models");
const userModel = require('./models/user.model');
const { user } = require('./models');
const Category = db.category;
const Product = db.product;
const Role = db.role;

Category.hasMany(Product); 


console.log(Category);
db.sequelize.sync({ force: true }).then(() => {
    console.log('tables dropped and recreated');
    init();
})

function init() {

    var categories = [
        {
            name: "Electronics",
            description: "This category will contain all the electronic products"
        },
        {
            name: "KitchenItems",
            description: "This category will contain all the Kitchen related products"
        }
    ];

    Category.bulkCreate(categories).then(() => {
        console.log("Categories table is initialized");
    }).catch(err => {
        console.log("Error while initializing ategories table");
    })

     Role.create({
        id:1,
        name:"user"
    });
    Role.create({
        id:2,
        name:"admin"
    })

}
require('./routes/category.routes')(app);
require('./routes/product.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/cart.routes')(app);

module.exports = app;