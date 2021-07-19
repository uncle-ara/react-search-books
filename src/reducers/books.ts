import { Reducer } from "redux";
import { Actions, SET_BOOKS, SET_TOTAL_ITEMS } from "../actions/books";
import { pack } from "../helpers";
import { Book } from "../types";

export type BooksState = {
  storage: Record<string, Book>;
  totalItems: number;
};

export const initialState: BooksState = {
  storage: {},
  totalItems: 0,
};

const reduceBooks: Reducer<BooksState, Actions> = (
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, storage: pack(action.payload.books, "id") };
    case SET_TOTAL_ITEMS:
      return { ...state, totalItems: action.payload };
    default:
      return state;
  }
};

export default reduceBooks;
