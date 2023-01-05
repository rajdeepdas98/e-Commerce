const orderController = require("../controllers/cart.controller")
const {authJwt, requestValidator } = require("../middlewares");

module.exports = function(app){

    app.post("/ecomm/api/v1/carts",[authJwt.verifyToken], orderController.create);
    app.put("/ecomm/api/v1/carts/:id",[authJwt.verifyToken], orderController.update);
    app.get("/ecomm/api/v1/carts/:cartId",[authJwt.verifyToken], orderController.getCart);

}