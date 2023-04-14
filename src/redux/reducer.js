import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, /*RESET*/ } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            }
        
        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter(favorite => favorite.id !== action.payload)

            return {
                ...state,
                myFavorites: newFavorites,
                allCharactersFav: newFavorites
            }

        case FILTER:
            const newFilter = state.allCharactersFav.filter(character => character.gender === action.payload)

            return{
                ...state,
                myFavorites: 
                    action.payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : newFilter
            }

        // case RESET:                  (BOTÓN RESET)
        //     return{
        //         ...state,
        //         myFavorites: [...state.allCharactersFav]
        //     }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]

            return{
                ...state,
                myFavorites: 
                    action.payload === "A"
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id )
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id )
            }

        default:
            return {...state}
    }
}

export default reducer;