import {
  GET_ONE_FILM_SUCCESS,
  GET_ONE_FILM_FAILURE
} from "../config/ActionType";

const init = {
  data: [],
  error: null
};
export default function getOneReducer(state = init, action) {
  switch (action.type) {
    case GET_ONE_FILM_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null
      };
    case GET_ONE_FILM_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
