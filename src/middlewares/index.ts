import { all } from "redux-saga/effects";
import books from "./sagas/books";

export default function* rootSaga() {
  yield all([books()]);
}
