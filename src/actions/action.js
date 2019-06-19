import {
  LOG_IN,
  LOG_OUT,
  READ_CATEGORY_PENDING,
  READ_CATEGORY_SUCCESS,
  READ_CATEGORY_FAILURE,

  READ_FILM_PENDING,
  READ_FILM_FAILURE,
  READ_FILM_SUCCESS,

} from "../config/ActionType";

export function LogIn() {
  return { type: LOG_IN };
}
export function LogOut() {
  return { type: LOG_OUT };
}

export function readCategoryPending() {
  return { type: READ_CATEGORY_PENDING };
}
export function readCategorySuccess(data) {
  return { type: READ_CATEGORY_SUCCESS, data };
}
export function readCategoryFailure(error) {
  return { type: READ_CATEGORY_FAILURE, error };
}
//film
export function readFilmPending() {
  return { type: READ_FILM_PENDING };
}
export function readFilmSuccess(data) {
  return { type: READ_FILM_SUCCESS, data };
}
export function readFilmFailure(error) {
  return { type: READ_FILM_FAILURE, error };
}




