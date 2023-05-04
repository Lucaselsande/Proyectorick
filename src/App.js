import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Deatil from './components/Deatil';
import About from './components/about';
import Todo from './components/Todo';




function App() {
   return (
      <Routes>
         <Route path='/' element={<NavBar/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/home' element={<Todo/>}/>
         <Route path='/deatil' element={Deatil}>
            <Route path=':id' element={Deatil}/>
         </Route>
      </Routes>  
   );
}

export default App;