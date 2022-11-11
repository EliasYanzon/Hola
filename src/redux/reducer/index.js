import {  GET_ALL_HOUSES } from "../actions";
import { GET_HOUSE } from "../actions";
import { CREATE_HOUSE } from "../actions";
import { DELETE_HOUSE } from "../actions";
// Importa las actions types que necesites acá:


const initialState = {
  houses: [],
  house: {},
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case GET_ALL_HOUSES:
        return{ 
          ...state,
          houses: action.payload

        }

      case GET_HOUSE:
        return{
        ...state,
        house: action.payload
        }

      case CREATE_HOUSE:
        return{
          ...state,
          houses: [...state.houses, action.payload]
        }



      case DELETE_HOUSE:
        return{
          ...state,
          houses: state.houses.filter((casa)=> casa.id !== action.payload)
        }

      default: return state
     
  };
};

export default rootReducer;