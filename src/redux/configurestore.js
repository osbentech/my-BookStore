import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReduce from './books/books';
import categoryReduce from './categories/categories';

const rootReducer = combineReducers({
  book: bookReduce,
  categ: categoryReduce,
});

const store = configureStore({reducer: rootReducer});

export default store;