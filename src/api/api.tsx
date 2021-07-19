import axios from "axios";
import { ResponseBooks } from "../types";

const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books";
const GET_BOOKS_BY_NAME_ANDPOINT = "/v1/volumes?q=";
const KEY_HEADER = "&key" + process.env.REACT_APP_API_KEY;

export const fetchBooks = (): Promise<ResponseBooks> => {
  return axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" +
      process.env.REACT_APP_API_KEY
  );
};
