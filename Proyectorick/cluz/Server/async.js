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
        if(error.mensage === 'hola'){
            return res.status(404).send(error.mensage)
        }
        return res.status(500).send(error.mensage)  
    }
}


module.exports = getCharById

////////////////////////////
const login = async (userData) => {
    try {
       const { email, password } = userData;
       const URL = 'http://localhost:3001/rickandmorty/login/';
       const { data } = await axios(URL + `?email=${email}&password=${password}`)
       const { access } = data;
       setAccess(access);
       if (access) {
          navigate('/home');
       } else {
          throw Error()
       }

    } catch (error) {
       window.alert('¡INCORRECTO!')
    }


 }
 //////////
 const onSearch = async (id) => {
    try {
       const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
       const personaje = response.data
       if (personaje.name && characters.find(char => char.id === personaje.id)) {
          window.alert('¡Ya existe un personaje con este ID!')
       } else {
          if (personaje.name) {
             setCharacters((oldChars) => [...oldChars, personaje]);
          }
       }
    } catch (error) {
       window.alert('¡No hay personajes con este ID!')
    }

 };
 /////////////////////

 export const addFav =  (character) => {
    try {
       const URL = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      const {data} = await axios.post(URL, character)
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       ;
    };
    } catch (error) {
       window.alert('no se puede')
    }
    
 };

 /////////////////////////////

 export const removeFav = (id) => {
    try {
       const URL = 'http://localhost:3001/rickandmorty/fav/'+id;
    return async (dispatch) => {
      const {data} = await axios.delete(URL)
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
             pepi: id
          });
       ;
    };
    } catch (error) {
       window.alert('tampoco se puede')
    }
    
 };