/**
 * This file will contain the routes logic for the Category resource
 * and will export it.
 */
 const { authJwt, requestValidator } = require("../middlewares");

const categoryController = require("../controllers/category.controller")

module.exports = function(app){
    app.post("/ecomm/api/v1/categories", categoryController.create);
    app.get("/ecomm/api/v1/categories", categoryController.findAll);
    app.get("/ecomm/api/v1/categories/:id", categoryController.findOne);
    app.put("/ecomm/api/v1/categories/:id",[requestValidator.validateCategoryRequest, authJwt.verifyToken,authJwt.isAdmin] ,categoryController.update);
    app.delete("/ecomm/api/v1/categories/:id",[authJwt.verifyToken,authJwt.isAdmin], categoryController.delete);
}