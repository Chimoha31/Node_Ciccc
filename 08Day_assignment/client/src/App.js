import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Author from './components/Author';
import Book from './components/Book';
import BookList from './components/BookList';


const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/authors" element={<Author />} />
          <Route path="/books" element={<Book />} />
          <Route path="/booklist" element={<BookList />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App

