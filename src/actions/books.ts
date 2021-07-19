import { InferValueType } from "../helpers";
import { Book } from "../types";

export const REQUEST_BOOKS = "REQUEST_BOOKS" as const;
export const SET_BOOKS = "SET_BOOKS" as const;
export const SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS" as const;

export const setBooks = (books: Book[]) => ({
  type: SET_BOOKS,
  payload: { books },
});
export const requestBooks = () => ({ type: REQUEST_BOOKS });
export const setTotalItems = (totalCount: number) => ({
  type: SET_TOTAL_ITEMS,
  payload: totalCount,
});

const actions = {
  setBooks,
  requestBooks,
  setTotalItems,
};

export type Actions = ReturnType<InferValueType<typeof actions>>;
