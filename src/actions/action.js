import {
  LOG_IN,
  LOG_OUT,
  READ_CATEGORY_PENDING,
  READ_CATEGORY_SUCCESS,
  READ_CATEGORY_FAILURE,

  READ_FILM_PENDING,
  READ_FILM_FAILURE,
  READ_FILM_SUCCESS,

  READ_USER_FILM_FAVOR_PENDING,
  READ_USER_FILM_FAVOR_FAILURE,
  READ_USER_FILM_FAVOR_SUCCESS,

  READ_BRANCH_PENDING,
  READ_BRANCH_FAILURE,
  READ_BRANCH_SUCCESS,

  READ_SCHEDULE_PENDING,
  READ_SCHEDULE_FAILURE,
  READ_SCHEDULE_SUCCESS

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

//user - fim favor
export function readUserFilmFavorPending() {
  return { type: READ_USER_FILM_FAVOR_PENDING };
}
export function readUserFilmFavorSuccess(data) {
  return { type: READ_USER_FILM_FAVOR_SUCCESS, data };
}
export function readUserFilmFavorFailure(error) {
  return { type: READ_USER_FILM_FAVOR_FAILURE, error };
}
//--user - fim favor

//branch
export function readBranchPending() {
  return { type: READ_BRANCH_PENDING };
}
export function readBranchSuccess(data) {
  return { type: READ_BRANCH_SUCCESS, data };
}
export function readBranchFailure(error) {
  return { type: READ_BRANCH_FAILURE, error };
}
//--branch

//schedule
export function readSchedulePending() {
  return { type: READ_SCHEDULE_PENDING };
}
export function readScheduleSuccess(data) {
  return { type: READ_SCHEDULE_SUCCESS, data };
}
export function readScheduleFailure(error) {
  return { type: READ_SCHEDULE_FAILURE, error };
}
//--schedule


