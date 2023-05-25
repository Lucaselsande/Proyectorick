let myFavorites = []


const postFav = (req,res)=>{
    myFavorites = [...myFavorites,req.body]
    res.json(myFavorites)
}

const deleteFav = (req,res)=>{
    myFavorites = myFavorites.filter(per => per.id !== Number(req.params.id) )
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}