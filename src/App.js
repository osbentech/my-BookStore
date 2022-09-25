import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Home from './Home';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path="Books" element={<Books />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;