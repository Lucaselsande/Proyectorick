const express = require('express');
const getCharById = require('../controllers/getCharById')
const {postFav,deleteFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const logins = express.Router()
const character = express.Router()
const fav = express.Router()
const deletfav = express.Router()

character.get("/character/:id", (req, res)=>{
    getCharById(req,res)
});

logins.get("/login", (req, res)=>{
    login(req,res)
});

fav.post("/fav", (req, res)=>{
    postFav(req,res)
});

deletfav.delete("/fav/:id", (req, res)=>{
    deleteFav(req,res)
});

module.exports = {
    character,
    logins,
    fav,
    deletfav
};