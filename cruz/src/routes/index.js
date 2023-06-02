const express = require('express');
const getCharById = require('../controllers/getCharById')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const postUser = require('../controllers/postUser')
const login = require('../controllers/login')
const router = express.Router()

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;