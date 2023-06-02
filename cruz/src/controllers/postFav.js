const { Favorite } = require('../db')

const postFav = async (req, res) => {
try {
     const { id, name, origin, status, image, species, gender } = req.body
    if (!name || !origin || !status || !image || !species || !gender)return res.staus(400).send('Faltan datos')
    await Favorite.create({ id, name, origin, status, image, species, gender })
    const allFavorites = await Favorite.findAll()
    return res.status(200).json(allFavorites)

} catch (error) {
    res.status(500).send(error.message)
}
}


module.exports = postFav



