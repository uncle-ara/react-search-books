import { Action, Reducer } from "redux";

import { SET_BOOKS } from "../actions/books";

export type BooksState = {
  storage: {};
};

const initialState: BooksState = {
  storage: {},
};

const reduceBooks: Reducer<BooksState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state };
    default:
      return state;
  }
};

export default reduceBooks;
