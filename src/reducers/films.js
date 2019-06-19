import {
  READ_FILM_PENDING,
  READ_FILM_SUCCESS,
  READ_FILM_FAILURE,
} from "../config/ActionType";

const init = {
  loading: false,
  data: [],
  error: null
};

export default function filmReducer(state = init, action) {
  switch (action.type) {
    case READ_FILM_PENDING:
      return {
        ...state,
        loading: true
      };
    case READ_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null
      };
    case READ_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
