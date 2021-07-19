import { Action } from "redux";
import { fetchBooks } from "../../api/api";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { REQUEST_BOOKS, setBooks, setTotalItems } from "../../actions/books";
import { ReturnTypePromise } from "../../helpers";

function* requestBooks(): any {
  const responseBooks: ReturnTypePromise<typeof fetchBooks> = yield call(
    fetchBooks
  );
  yield all([
    put(
      setBooks(
        responseBooks.data.items.map(({ id, volumeInfo }: any) => ({
          id,
          volumeInfo: {
            title: volumeInfo.title,
            subtitle: volumeInfo.subtitle,
            authors: volumeInfo.authors,
            categories: volumeInfo.categories,
            publisher: volumeInfo.publisher,
            publishedDate: volumeInfo.publishedDate,
            description: volumeInfo.description,
            imageLinks: volumeInfo.imageLinks,
          },
        }))
      )
    ),
    put(setTotalItems(responseBooks.data.totalItems)),
  ]);
}

export default function* rootSaga() {
  yield takeEvery(REQUEST_BOOKS, requestBooks);
}
