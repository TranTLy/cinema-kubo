import { LOG_IN, LOG_OUT } from "../config/ActionType";

const init = {
  isLoggedIn: false
};

export default function LogIn(state = init, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}