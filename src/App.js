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






function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'lucas@gmail.com';
   const PASSWORD = 'unaPa';

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');

   }, [access]);

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };


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
         {local.pathname !== '/' && <NavBar onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/deatil' element={<Deatil />}>
               <Route path=':id' element={<Deatil />} />
            </Route>
            <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
         </Routes>
      </div>

   );
}

export default App;
