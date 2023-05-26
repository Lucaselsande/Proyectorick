const axios = require('axios');



const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
    try {
         let { id } = req.params
    const response = await axios.get(`${URL}${id}`)
    const personaje = response.data
    
    if(personaje.name){
      return res.status(200).json(personaje)  
    }else{
        throw Error('hola')
    }
    } catch (error) {
        if(error.message === 'hola'){
            return res.status(404).send(error.message)
        }
        return res.status(500).send(error.message)  
    }
}


module.exports = getCharById
