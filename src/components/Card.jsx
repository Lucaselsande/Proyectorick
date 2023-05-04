import style from './styles/Todos.module.css'

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div  className={style.card}> 
         <button onClick={()=> {onClose(id)}}>Close</button>
         <h3>{`Nombre: ${name}`}</h3>
         <h3>{`Estado: ${status}`}</h3>
         <h3>{`Especie: ${species}`}</h3>
         <h3>{`Genero: ${gender}`}</h3>
         <h3>{`Origen: ${origin}`}</h3>
         <img src={image} alt='' className={style.imagen} />
      </div>
   );
}
