import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Deatil from './components/Deatil';
import About from './components/about';
import Cards from './components/Cards';
import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites';
import Create from './components/create';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar';





function App() {


   const personajeee = useSelector((state) => state.personaje)



   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   // const EMAIL = 'lucas@gmail.com';
   // const PASSWORD = 'unaPa';

   // const login = (userData) => {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }
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

   useEffect(() => {
      !access && navigate('/');

   }, [access]);

   const [characters, setCharacters] = useState([]);

   

   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name && characters.find(char => char.id === data.id)) {
   //          window.alert('¡Ya existe un personaje con este ID!')
   //       } else {
   //          if(data.name){
   //             setCharacters((oldChars) => [...oldChars, data]);
   //          }else{
   //             window.alert('¡No hay personajes con este ID!');
   //          }
   //       }
   //    });
   // };
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

   // if(personaje.name){

   //    setCharacters([...characters, personajeee])
   // }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };

   const local = useLocation()

   return (
      <div>
         {local.pathname !== '/' && <NavBar />}
         {local.pathname === '/home' && <SearchBar onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={[...personajeee,...characters]}  onClose={onClose} />}/>
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
            <Route path='/deatil' element={<Deatil />}>
               <Route path=':id' element={<Deatil />} />
            </Route>
            <Route path="/favorites" element={<Favorites onClose={onClose} />} />
         </Routes>
      </div>

   );
}

export default App;
