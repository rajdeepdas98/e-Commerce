module.exports = {
    development: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "Welcome1",
        DB: "ecom_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, 
            idle: 10000  
        }
    },
    test: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "Mohit@19",
        DB: "ecom_test_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, 
            idle: 10000 
        }
    },
}