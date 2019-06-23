import { LOG_IN, LOG_OUT } from "../config/ActionType";

const init = {
  isLoggedIn: false,
  user: []
};

export default function LogIn(state = init, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        ...state,
        user: [],
        isLoggedIn: false
      };
    default:
      return state;
  }
}