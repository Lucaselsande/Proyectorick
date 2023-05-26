import Card from './Card.jsx';
import style from './styles/Todos.module.css'


export default function Cards({ characters, onClose }) {

    // const todos = useSelector((state)=>state.todos)
    // const [verificar,setverificar] = useState(true)

    // const dispatch = useDispatch()
    
    // const ide = characters.id
    // if(todos.includes(ide))setverificar(!verificar)  
      
      return (
         <div className={style.cards}>
    
      {/* {personajeee&&(<Card
      key={personajeee.id}
      id={personajeee.id}
      name={personajeee.name}
      species={personajeee.species}
      gender={personajeee.gender}
      image={personajeee.image}
      origin={personajeee.name}
      status={personajeee.status}
      onClose={onClose}
    />)} */}

      {characters.map(({ id, name, species, gender, image, origin, status }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            status={status}
            onClose={onClose}
          />
        )
      })}
      

    
  </div>
      )
     
    

    

  
}


