const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging: false, native:false}) // Example for postgres


// const database = new Sequelize('postgres://postgres:333@localhost:5432/moneda') 
FavoriteModel(database)
UserModel(database)



const { User, Favorite } = database.models;
User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});



module.exports = { 
    User,
    Favorite,
    conn: database 
}