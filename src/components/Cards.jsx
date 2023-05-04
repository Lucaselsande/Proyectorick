import Card from './Card.jsx';
import style from './styles/Todos.module.css'

export default function Cards({characters, onClose}) {
   return <div className={style.cards}>
    {
    characters.map(({id, name, species, gender, image, origin, status}) =>{
      return (
        <Card 
        key={id}
        id={id}
        name= {name}
        species={species}
        gender={gender}
        image={image}
        origin={origin.name}
        status={status}
        onClose={onClose}
        />
      )
   })
   
    } 
   </div>
}


