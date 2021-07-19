import { all, call } from "redux-saga/effects";
import books from "./sagas/books";

export default function* rootSaga() {
  yield all([call(books)]);
}
