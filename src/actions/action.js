import {
  LOG_IN,
  LOG_OUT,
  READ_CATEGORY_PENDING,
  READ_CATEGORY_SUCCESS,
  READ_CATEGORY_FAILURE,
} from "../config/ActionType";

export function LogIn() {
  return { type: LOG_IN };
}
export function LogOut() {
  return { type: LOG_OUT };
}


//category
export function readCategoryPending() {
  return { type: READ_CATEGORY_PENDING };
}
export function readCategorySuccess(data) {
  return { type: READ_CATEGORY_SUCCESS, data };
}
export function readCategoryFailure(error) {
  return { type: READ_CATEGORY_FAILURE, error };
}
//end category




