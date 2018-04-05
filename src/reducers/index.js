import { combineReducers } from 'redux'
import { GET_PROJECT_CARDS, ADD_PROJECT_CARD, SELECT_PROJECT_CARD, SELECT_ALL_CARDS, UNSELECT_ALL_CARDS, DELETE_CARDS } from '../actions'

function projectCards(state = { all: [] }, action) {
  switch (action.type) {
    case SELECT_ALL_CARDS:
      return {
        ...state,
        all: action.payload
      }
    case UNSELECT_ALL_CARDS:
      return {
        ...state,
        all: action.payload
      }
    case SELECT_PROJECT_CARD:
      //create new array that includes the selected card
      let selectedState = state.all.map(el => {
        if(el._id === action.payload._id){
          el.is_selected = action.payload.is_selected
        }
        return el
      })
      return {
        ...state,
        all: selectedState
      }
    case ADD_PROJECT_CARD:
      return {
        ...state,
        all: [...state.all, action.payload]
      }
    case GET_PROJECT_CARDS:
      return {
        ...state,
        all: action.payload
      }
    case DELETE_CARDS:
      const remainingCards =
      state.all.filter(el => {
        return !action.payload.includes(el)
      })
      return {
        ...state,
        all: remainingCards
      }
    default:
      return state
  }
}

export default combineReducers({
  projectCards
})
