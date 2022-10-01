// import * as React from 'react';
// import {
//   Routes,
//   Route,
// } from 'react-router-dom';
// import Books from './components/Books';
// import Home from './Home';
// import Categories from './components/Categories';
// import './App.css';

// function App() {
//   return (
//     <div>
//         <Routes>
//           <Route path="Books" element={<Books />} />
//           <Route path="categories" element={<Categories />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Books" element={<Books />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;