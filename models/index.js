 const env = process.env.NODE_ENV || 'development';
 const config = require("../configs/db.config")[env];
 const Sequelize = require("sequelize");
 
 const sequelize = new Sequelize(
     config.DB,
     config.USER,
     config.PASSWORD,
     {
         host: config.HOST,
         dialect: config.dialect,
         operatorsAliases: false,
         pool: {
             max: config.pool.max,
             min: config.pool.min,
             acquire: config.pool.acquire,
             idle: config.pool.idle
         }
     }
 );
 
 const db = {};
 db.Sequelize = Sequelize;
 db.sequelize = sequelize;
 db.category = require('./category.model.js')(sequelize, Sequelize);
 db.product = require('./product.model.js')(sequelize, Sequelize);
 db.user = require('./user.model.js')(sequelize, Sequelize);
 db.role = require('./role.model.js')(sequelize, Sequelize);
 db.cart = require('./cart.model.js')(sequelize, Sequelize);
 
 db.role.belongsToMany(db.user, {
     through: "user_roles",
     foreignKey: "roleId",
     otherKey: "userId"
 });
 db.user.belongsToMany(db.role, {
     through: "user_roles",
     foreignKey: "userId",
     otherKey: "roleId"
 });
 
 
  db.user.hasMany(db.cart);

   db.product.belongsToMany(db.cart, {
     through: "cart_products",
     foreignKey: "productId",
     otherKey: "cartId"
 });
 db.cart.belongsToMany(db.product, {
     through: "cart_products",
     foreignKey: "cartId",
     otherKey: "productId"
 });
 
 db.ROLES = ["user", "admin"];
 
 
 module.exports = db;