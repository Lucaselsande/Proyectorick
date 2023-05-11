import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAV: return {
            ...state,
            myFavorites: [...state.allCharactersFav, action.payload],
            allCharactersFav: [...state.allCharactersFav, action.payload],
          };
        case REMOVE_FAV:
            const filter = state.myFavorites.filter((user) => user.id !== Number(action.payload))

            return {
                ...state,
                myFavorites: filter
            }
            case FILTER:
        const allCharactersFiltered = state.allCharactersFav.filter((char)=> char.gender === action.payload);
        return {
          ...state,
          myFavorites: allCharactersFiltered
        }
        case  ORDER:
          const allCharactersFavCopy = [...state.allCharactersFav];
          return{
            ...state,
            myFavorites: 
            action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id)
          }
            



        default: return {
            ...state
        }
    }
}

export default reducer