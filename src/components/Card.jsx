import style from './styles/Todos.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setisFav] = useState(false)


   const handleFavorite = () => {
      if (isFav) {
         setisFav(false)
         removeFav(id)

      } else {
         setisFav(true)
         addFav({ id, name, status, species, gender, origin, image })
      }

   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => { onClose(id) }}>Close</button>
         <h3>{`Nombre: ${name}`}</h3>
         <h3>{`Estado: ${status}`}</h3>
         <h3>{`Especie: ${species}`}</h3>
         <h3>{`Genero: ${gender}`}</h3>
         <h3>{`Origen: ${origin}`}</h3>
         <Link to={`/deatil/${id}`}>
            <img src={image} alt='' className={style.imagen} />
         </Link>

      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}





export default connect(mapStateToProps, mapDispatchToProps)(
   Card)