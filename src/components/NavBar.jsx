import style from './styles/Todos.module.css'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = ({onSearch}) => {
   return (
      <div className={style.seach}>
        <button>
            <Link to='/About'>about</Link>
        </button>
        <button>
            <Link to='/home'>home</Link>
        </button>
        <button>
            <Link to='/'>«</Link>
        </button>
        <button>
            <Link to='/Deatil'>Deatil</Link>
        </button>
        <SearchBar onSearch={onSearch}/>
      </div>
   );
};

export default  NavBar