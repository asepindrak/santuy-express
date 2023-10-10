
const UsersModel = require("./models/users.js")
const ProductsModel = require("./models/products.js")
const CategoriesModel = require("./models/categories.js")


const models = {

        users: UsersModel,

        categories: CategoriesModel,

        products: ProductsModel,

}


module.exports = { models }
