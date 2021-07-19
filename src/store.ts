import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducers from "./reducers";
import sagas from "./middlewares";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export type State = ReturnType<typeof reducers>;

//@ts-ignore
window.store = store;
